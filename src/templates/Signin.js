import React from 'react'
import '../style/Common.css';
import { useForm } from 'react-hook-form';
import { json, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signin() {

  const { register, handleSubmit } = useForm();
  const navigate=useNavigate();
  let baseUrl='http://localhost:8989/emp/getEmployeee/'
  const onLogin = auth => {
        axios.get(baseUrl+auth.eusername+'/'+auth.epassword)
        .then(res=>{
          console.log(res)
          if(res.status===200)
          {
              let userJson=JSON.stringify(res.data);
                localStorage.setItem('user',userJson);   

              navigate('/dashboard')
          }
        
        }
        )
        .catch(error=>{
          console.log(error)
          if(error.status===500)
          {
             alert(error.response.data.message)
          }
          else{
             alert('Application is in maintenace')
          }
        })
  }
  return (
    <div className='p-5'>

      <section className=" text-center text-lg-start mt-3">

        <div className="card mb-3">
          <div className="row g-0 d-flex align-items-center">
            <div className="col-lg-4 d-none d-lg-flex">
              <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" alt="Trendy Pants and Shoes"
                className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
            </div>
            <div className="col-lg-8">
              <div className="card-body py-5 px-md-5">

                <form onSubmit={handleSubmit(onLogin)}>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="text" id="form2Example1" className="form-control"
                      {...register('eusername')} />
                    <label className="form-label" forid="form2Example1">Username</label>
                  </div>


                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control"
                      {...register('epassword')} />
                    <label className="form-label" forid="form2Example2">Password</label>
                  </div>


                  <div className="row mb-4">
                    <div className="col d-flex justify-content-center">

                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="form2Example31" defaultChecked />
                        <label className="form-check-label" forid="form2Example31"> Remember me </label>
                      </div>
                    </div>

                    <div className="col">

                      <a href="#!">Forgot password?</a>
                    </div>
                  </div>


                  <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>

                </form>

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Signin