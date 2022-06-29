import React from "react";


const ProfileCard = () => {


    return (
        <div class="mt-5">
            <h2>Пользователь</h2>
            <div className="container py-5 ">
                <div className="row d-flex justify-content-start align-items-center">
                    <div className="col col-md-7 col-lg-8 mb-4 mb-lg-0">
                        <div className="card mb-3" style={{"border-radius": "0.5rem"}}>
                            <div className="row g-0">
                                <div className="col-md-4 gradient-custom text-center text-white"
                                     style={{
                                         "border-top-left-radius": "0.5rem",
                                         "border-bottom-left-radius": "0.5rem"
                                     }}>
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                        alt="Avatar" className="img-fluid my-5" style={{width: "80px"}}/>
                                    <h5>Marie Horwitz</h5>
                                    <p>Web Designer</p>
                                    {/*<i className="far fa-edit mb-5"></i>*/}
                                    {/* Можно вставить кнопку выхода    */}
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body p-4">
                                        <h6>Information</h6>
                                        <hr className="mt-0 mb-4"/>
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">
                                                <h6>Email</h6>
                                                <p className="text-muted">info@example.com</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Phone</h6>
                                                <p className="text-muted">123 456 789</p>
                                            </div>
                                        </div>
                                        <h6>Projects</h6>
                                        <hr className="mt-0 mb-4"/>
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">
                                                <h6>Recent</h6>
                                                <p className="text-muted">Lorem ipsum</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Most Viewed</h6>
                                                <p className="text-muted">Dolor sit amet</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-start">
                                            <button type="button" className="btn btn-danger">
                                                Выход
                                                <i style={{"margin-left": '5px'}} className="bi bi-box-arrow-in-right"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;