import './App.css'
import Compo1 from './components/compo1.jsx'

function fun() {
  alert("You clicked me")
}
function App() {
  // return (
  //   <>
  //   <div className="Head">
  //     <h1>Blinkit - Online Grocery Delivery</h1>
  //   </div>

  //   <div className="ProductDetails">
  //     <table>
  //       <thead>
  //         <tr>
  //           <th>Product</th>
  //           <th>Category</th>
  //           <th>Price</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         <tr>
  //           <td>Apple</td>
  //           <td>Fruit</td>
  //           <td>Rs. 100</td>
  //         </tr>
  //         <tr>
  //           <td>Broccoli</td>
  //           <td>Vegetable</td>
  //           <td>Rs. 80</td>
  //         </tr>
  //         <tr>
  //           <td>Tomato</td>
  //           <td>Vegetable</td>
  //           <td>Rs. 50</td>
  //         </tr>
  //         <tr>
  //           <td>Chicken</td>
  //           <td>Meat</td>
  //           <td>Rs. 140</td>
  //         </tr>
  //       </tbody>
  //     </table>
  //   </div>
  //   <div className="butt">
  //     <button onClick={fun} >Click me</button>
  //   </div>
  //   </>
  // );
  return (
    <div>
      <Compo1/>
    </div>
  );
}
export default App
