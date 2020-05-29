// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// ===============================================================================

var tableArray = [
  {
    customerName: "Gordon",
    customerEmail: "ramsey@example.com",
    phoneNumber: "123-456-7890"
  },
  {
    customerName: "Jamie",
    customerEmail: "jamie@example.com",
    phoneNumber: "234-567-8901"
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
