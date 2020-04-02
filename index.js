let credentialDataSet = [
  {
    role: "Student",
    credentials: {
      email: "Student@gmail.com",
      password: "test123"
    }
  },
  {
    role: "Lecturer",
    credentials: {
      email: "Lecturer@gmail.com",
      password: "test123"
    }
  },
  {
    role: "Manager",
    credentials: {
      email: "Manager@gmail.com",
      password: "test123"
    }
  },
  {
    role: "Adminstrator",
    credentials: {
      email: "Adminstrator@gmail.com",
      password: "test123"
    }
  }
];
let payload = {};
let tempFlag = false;
document.getElementById("submit").addEventListener("click", e => {
  payload["role"] = document.getElementById("role").value;
  payload["email"] = document.getElementById("email").value;
  payload["password"] = document.getElementById("password").value;
  let filterSelectedCredentials = credentialDataSet.filter(cred => {
    return cred.role === payload.role;
  });
  if (
    filterSelectedCredentials &&
    filterSelectedCredentials.length &&
    payload.role === filterSelectedCredentials[0].role &&
    payload.email === filterSelectedCredentials[0].credentials.email &&
    payload.password === filterSelectedCredentials[0].credentials.password
  ) {
    window.location.href =
      "file:///home/siva/practice1/Management-tool/home.html";
  } else {
    alert("Wrong Credentials");
  }
});
