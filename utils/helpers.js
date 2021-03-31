module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },

    check_asks: (asks) => {
      // Format date as MM/DD/YYYY
      if (!asks){
       alert("no results found!")
      }
    }
}



