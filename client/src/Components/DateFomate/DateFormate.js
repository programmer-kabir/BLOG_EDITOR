export const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
  
    // Adding ordinal suffixes (e.g., "19th", "1st")
    const daySuffix =
      day % 10 === 1 && day !== 11
        ? 'st'
        : day % 10 === 2 && day !== 12
        ? 'nd'
        : day % 10 === 3 && day !== 13
        ? 'rd'
        : 'th';
  
    return `${day}${daySuffix} ${month}, ${year}`;
  };
  
  export const calculateMonthDifference = (dateString) => {
    const today = new Date();
    const givenDate = new Date(dateString);

    const yearsDiff = today.getFullYear() - givenDate.getFullYear();
    const monthsDiff = today.getMonth() - givenDate.getMonth();

    return yearsDiff * 12 + monthsDiff;
  };