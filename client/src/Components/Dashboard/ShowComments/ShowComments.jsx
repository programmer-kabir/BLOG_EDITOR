import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../../Pages/Redux/Comments/commentSlice";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const ShowComments = ({ id }) => {
  const { user } = useAuth();
  const { isCommentsLoading, Comments, isCommentsError } = useSelector(
    (state) => state.Comments
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch,Comments]);
  const currentComments = Comments.find((comment) => comment.blogId === id);
  const [isCommentModal, setIsCommentModal] = useState(false);
  const [isComment, setIsComment] = useState("false");

  const toggleCommentModal = () => {
    setIsCommentModal(!isCommentModal);
  };
 const handleCommentEdit = id =>{
  const data = {
    blogId:currentComments.blogId,
    id,
    comment:isComment
  }
  console.log(data);
  axios.put("http://localhost:3000/comments",data)
  .then(response =>{
    console.log(response.data);
    toast.success(response?.data?.message)
  })
setIsComment("")
  setIsCommentModal(false);
 }
  return (
    <div className="px-5 pt-5">
      {currentComments?.comments?.map((comment) => (
        <div className="mt-5">
          <div className="border rounded px-5 py-4">
            <div className="flex items-center gap-3">
              <img
                className="h-10 w-10 rounded-full"
                src={comment.image}
                alt="Profile Image"
              />
              <p>{comment.name}</p>
            </div>
            {/*  */}
            <div className="pt-2 flex items-center justify-between">
              <p className="text-sm text-start p-2 rounded-lg bg-background">
                {comment.comment}
              </p>
              {comment.email === user.email && (
                <div className="space-x-3">
                  <button onClick={toggleCommentModal} className="whitespace-nowrap rounded-md text-sm  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                    Edit
                  </button>
                  <button className="whitespace-nowrap rounded-md text-sm  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">Delete</button>
                </div>
              )}
            </div>
          </div>
          {(isCommentModal) && (
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => {
                setIsCommentModal(false);
                // setIsShareModal(false);
              }}
            ></div>
          )}
          {isCommentModal && (
            <div className="fixed top-1/2 w-[450px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white  rounded-lg shadow-lg z-50">
              <h2 className="text-xl font-semibold mb-3  ">Comment</h2>
              <div className="flex flex-col items-end">
                <input
                  type="text"
                  name=""
                  className="outline-none border border-gray-300 px-4 rounded py-2 w-full"
                  placeholder="Enter Your Comment"
                  id=""
                  value={isComment} // Bind input value to state
                  onChange={(e) => setIsComment(e.target.value)}
                />
                <button
                  className="mt-2 flex items-center justify-end bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => handleCommentEdit(comment.id)}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
        
       
    </div>
  );
};

export default ShowComments;
