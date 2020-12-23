import * as React from 'react';
import './App.css';
import { IUser } from './models/User';
import Header from './conponents/common/Header';
import Main from './conponents/common/Main';
import Footer from './conponents/common/Footer';

const USERLIST: IUser[] = [
  {id: 1, name: "Bui Anh", address: "HCM", email: "buianh@gmail.com", phoneNumber: "03333626590"},
  {id: 2, name: "Quoc Khanh", address: "HCM", email: "quockhanh@gmail.com", phoneNumber: "03333626591"},
  {id: 3, name: "Thanh Hai", address: "HCM", email: "thanhhai@gmail.com", phoneNumber: "03333626592"},
  {id: 4, name: "Hoai Son", address: "HCM", email: "hoaison@gmail.com", phoneNumber: "03333626593"},
  {id: 5, name: "Van Khai", address: "HCM", email: "vankhai@gmail.com", phoneNumber: "03333626594"},
  {id: 6, name: "Hoang An", address: "HCM", email: "hoangan@gmail.com", phoneNumber: "03333626590"},
  {id: 7, name: "Tri Kiet", address: "HCM", email: "trikiet@gmail.com", phoneNumber: "03333626591"},
  {id: 8, name: "Hoang Nam", address: "HCM", email: "hoangnam@gmail.com", phoneNumber: "03333626592"}
];

const App = () =>{
  
  return (
    <div className="App">
      <Header></Header>
      <Main userList={USERLIST}></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;

