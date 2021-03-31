module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },

    check_asks: (asks) => {
      if (!asks){
       alert("no results found!")
      }
    }
}



