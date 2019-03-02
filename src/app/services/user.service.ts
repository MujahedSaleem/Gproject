import { Injectable } from "@angular/core";
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from 'src/Model/User';
@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(public firebaseService: AngularFireDatabase) {}
  user: AngularFireList<User>;

  getUsers() {
    this.user = this.firebaseService.list('users');
    return this.user.snapshotChanges();

  }

  insertUser(user: User) {
    this.user.push(user);

  }
  // populateForm(user) {
  //   this.form.setValue(user);

  // }

  updateUser(user: User) {
    this.user.update(user.$key,
      user
    );

  }

  deleteUser($key: string) {

    this.user.remove($key);

  }


}
