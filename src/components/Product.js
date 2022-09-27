import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { incNum } from '../action';
import { addtocart } from '../cartslice';
export const Product = () => {
    // const [cn, scn] = useState(1);
    // const navigation = useNavigate()
    const [Mydata, Setdata] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                Setdata(res.data)
                console.log(Setdata);
                console.log(Mydata);
            })
    }, []);
    const styyy = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
    }
    // const count = () => {
    //     scn(cn + 1);
    //     localStorage.setItem('count', cn)
    // }
    // const mystate = useSelector((state) => state.changenum);
    const dispatch = useDispatch();
    const dis = useDispatch();
    const handle = (data) => {
        dis(addtocart(data));
        
    }
    return (

        <>
        <div className='container ml-4 mt-2'><h1>New Arrivals </h1></div>
            <div style={styyy}>
                {Mydata && Mydata.length > 0 && Mydata?.map((data) => {
                    return (
                        <div className="row row-cols-1 row-cols-md-2 g-4 mt-2" >
                            <div className="col">
                                <div className="card rounded-start" style={{ width: '18rem' }}>
                                    <img src={data.image} className="card-img-top" height="300px" width="400px" alt="..." />
                                    <div className="card-body">
                                        <h6 className="card-title">{data.title}</h6>
                                        <p className="card-text">$ {data.price}</p>

                                        <div className="d-grid gap-3 ">
                                            <button type="button" className="btn btn-primary btn-xl" onClick={() => { dispatch(incNum()); handle(data) }}>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        {/* </div> */}
        </>
    )
}

