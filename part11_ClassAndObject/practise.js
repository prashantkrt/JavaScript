class User {
  constructor(stuName, email) {
    this.stuName = stuName;
    this.email = email;
  }

  viewData() {
    console.log("Website Data");
    console.log(this.stuName, this.email);
  }
}

let student1 = new User("Ratan", "ratan@gmuil.com");
let student2 = new User("Abhishek", "aacc@gmuil.com");

student1.viewData();
student2.viewData();

class Admin extends User {
  editUser() {
    this.stuName = "new Studnet";
    this.email = "new Studnet email";
  }
}

let admin = new Admin("Ratan", "ratan@gmuil.com");
admin.editUser();
admin.viewData();
