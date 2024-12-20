
function ProfileNav()
{
    let userJson= localStorage.getItem('user');
    const {username,usertype,addressProof,pancard}= JSON.parse(userJson)
    return(
        <div className='bg-primary d-flex justify-content-between ps-3 pe-3'>

         
         <div className='d-flex '>

        </div>
        </div>    
    )
}
export default ProfileNav;