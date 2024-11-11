import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import { FaChevronDown, FaChevronUp, FaPlus } from "react-icons/fa6";
import { PiPaperPlaneRight } from "react-icons/pi";
import "./Add.css";
const Add = () => {
  // Category
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleCategory = () => {
    setIsOpenCategory((prevState) => !prevState);
  };

  const categoryItems = [
    { id: 1, label: "programming" },
    { id: 2, label: "technology" },
    { id: 3, label: "devops" },
    { id: 4, label: "travel" },
    { id: 6, label: "education" },
    { id: 7, label: "lifestyle" },
    { id: 8, label: "fitness" },
    { id: 9, label: "fashion" },
  ];

  const handleSelectItem = (item) => {
    setActiveItem(item.id);
    setIsOpenCategory(false);
  };
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = {
    placeholder: "Star Typing...",
  };
  // console.log(content);
  const [file, setFile] = useState(null);

  // Function to handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  };
  return (
    <section className="max-w-3xl mx-auto shadow-md rounded-sm border p-2 md:p-5 ">
      <h2 className="text-xl md:text-2xl font-semibold text-center">
        Add Blog
      </h2>
      <form className="w-full space-y-4">
        {/* Title */}
        <div>
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor=""
          >
            Title
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm border-[#262626] focus:border-[#F50400] focus:outline-none"
            type="text"
            placeholder="Title..."
          />
        </div>

        {/* Category */}
        <div className="relative">
          <div
            className="flex h-10 items-center rounded-md justify-between border border-input bg-background px-3 py-2 text-sm border-[#262626] cursor-pointer"
            onClick={handleCategory}
          >
            <span>
              {activeItem
                ? categoryItems.find((item) => item.id === activeItem)?.label
                : "Select a Category"}
            </span>
            {isOpenCategory ? (
              <FaChevronUp
                size={14}
                className="transition-transform duration-300"
              />
            ) : (
              <FaChevronDown
                size={14}
                className="transition-transform duration-300"
              />
            )}
          </div>

          <div
            className={`absolute left-0 right-0 mt-2 z-50 bg-white shadow-md border rounded-md overflow-hidden transition-all duration-300 ${
              isOpenCategory ? "max-h-[350px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {categoryItems.map((item) => (
              <p
                key={item.id}
                onClick={() => handleSelectItem(item)}
                className={`group px-5 mx-1 gap-3 rounded-md flex items-center py-2 my-1 text-sm font-medium cursor-pointer transition-colors duration-300 ${
                  activeItem === item.id
                    ? "bg-[#F50400] text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {activeItem === item.id && (
                  <PiPaperPlaneRight
                    size={15}
                    className={`transition-colors duration-300 mr-2 ${
                      activeItem === item.id
                        ? "bg-[#F50400] text-white"
                        : "bg-transparent group-hover:bg-[#1d1d1d] rounded-full p-1"
                    }`}
                  />
                )}
                {item.label}
              </p>
            ))}
          </div>
        </div>

        {/* Text Editor */}

        <JoditEditor
          ref={editor}
          value={content}
          onChange={(newContent) => setContent(newContent)}
        />

        <div className="w-full px-3 mb-8">
          <label
            className="mx-auto cursor-pointer flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-green-400 bg-white p-4 text-center"
            htmlFor="dropzone-file"
          >
            {file ? (
              <div className="mt-4 w-full relative border border-gray-300 rounded-lg ">
                <img
                  src={file}
                  alt="Preview"
                  className="w-full p-10 h-[320px]  "
                />
                <div className="absolute bg-[#F50400] p-1 rounded-full -top-4 -right-2">
                <FaPlus className="rotate-45" size={23}/>
                </div>
              </div>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-green-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">
                  Category image
                </h2>

                <p className="mt-2 text-gray-500 tracking-wide">
                  Upload or drag & drop your file (SVG, PNG, JPG, or GIF)
                </p>
              </>
            )}

            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              name="category_image"
              accept="image/png, image/jpeg, image/webp"
              onChange={handleFileChange}
            />
          </label>

          {/* Display selected file preview */}
          
        </div>

        {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
      </form>
    </section>
  );
};

export default Add;
