import React from 'react'
import { useSelector } from 'react-redux';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { useDispatch } from 'react-redux';
import { removeiteam, total } from '../cartslice';
import { toast } from "react-toastify";


export default function Cart() {
  const state = useSelector((state) => state.cartslice.cartItems);
  let total1 = useSelector((state) => state.cartslice.cartTotalAmount);
  const dis = useDispatch();
  const data = JSON.parse(localStorage.getItem('data'));


  const hanleremove = (data) => {
    dis(removeiteam(data));
    toast.info("Iteam removed from cart", { position: "top-left" });
  }
 

  return (
    <>


      <div className="App">
        <Container>
          <Row>

            <h1 className="p-3">Your cart</h1>
            
            {/* <LogOut /> */}
            <Col className="col-md-12">
              {/* <Button
        className="m-2"
        variant="primary"
        onClick={() => navigate("/addUser")}
      >
        Add Users
      </Button> */}
              <Table striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* <tbody>
     { filterdata.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <img src={user.avatar} alt="loading..."></img>
                </td>
              </tr>
      )
      })}
      </tbody>  */}
                <tbody>
                  {data.length &&
                    data?.map((data) => {
                      return (
                        <tr>
                          <td>{data.id}</td>
                          <td className='dess'>{data.title}</td>
                          <td className='des'>{data.description}</td>
                          <td className='dess'>{data.category}</td>
                          <td>
                            <img src={data.image} alt="loading..." height="280px" width="250px"></img>
                          </td>
                          <td>$ {data.price}
                            {/* <Button
                              className="m-2"
                              variant="primary"
                              onClick={() => }
                            >Remove
                            </Button> */}
                            {/* <Button
                      className="m-2"
                      variant="primary"
                      onClick={() => Delete()}
                    >
                      Delete Users
                    // </Button> */}
                          </td>
                          <td>
                            <button type="button" class="btn btn-danger" onClick={() => { hanleremove(data) }}>Remove</button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>

              </Table>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col>
            <div className='total'>
              <h2><span className='totalcolor'>Total Amount :- </span> $ <b>{total1.toFixed(2)}</b> </h2>
            </div>
          </Col>
        </Row>
      </Container>

    </>
  )
}
