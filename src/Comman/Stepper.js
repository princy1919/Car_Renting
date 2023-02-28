import React from "react";

export const Stepper = ({c1,c2,d1,d2,co1,co2,do1,do2}) => (
    <div className="x_title_num_mian_Wrapper float_left">
        <div className="container">
            <div className="x_title_inner_num_wrapper float_left">
                <div className="x_title_num_heading">
                    <h3>Choose a car</h3>
                    <p>Complete Your Step</p>
                </div>
                <div className="x_title_num_heading_cont">
                    <div className="x_title_num_main_box_wrapper">
                        <div className="x_icon_num">
                            <p>1</p>
                        </div>
                        <h5>Time &amp; place</h5>
                    </div>
                    <div className={c1}>
                        <div className={c2}>
                            <p>2</p>
                        </div>
                        <h5>Car</h5>
                    </div>
                    <div className={d1}>
                        <div className={d2}>
                            <p>3</p>
                        </div>
                        <h5>detail</h5>
                    </div>
                    <div className={co1}>
                        <div className={co2}>
                            <p>4</p>
                        </div>
                        <h5>checkout</h5>
                    </div>
                    <div className={do1}>
                        <div className={do2}>
                            <p>5</p>
                        </div>
                        <h5>done!</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
// import React from "react";
//
// export const Stepper = ({}) => (
//     <div className="x_title_num_mian_Wrapper float_left">
//         <div className="container">
//             <div className="x_title_inner_num_wrapper float_left">
//                 <div className="x_title_num_heading">
//                     <h3>Choose a car</h3>
//                     <p>Complete Your Step</p>
//                 </div>
//                 <div className="x_title_num_heading_cont">
//                     <div className="x_title_num_main_box_wrapper">
//                         <div className="x_icon_num">
//                             <p>1</p>
//                         </div>
//                         <h5>Time &amp; place</h5>
//                     </div>
//                     <div className="x_title_num_main_box_wrapper x_title_num_main_box_wrapper2">
//                         <div className="x_icon_num x_icon_num2">
//                             <p>2</p>
//                         </div>
//                         <h5>Car</h5>
//                     </div>
//                     <div className="x_title_num_main_box_wrapper x_title_num_main_box_wrapper3">
//                         <div className="x_icon_num x_icon_num3">
//                             <p>3</p>
//                         </div>
//                         <h5>detail</h5>
//                     </div>
//                     <div className="x_title_num_main_box_wrapper x_title_num_main_box_wrapper3">
//                         <div className="x_icon_num x_icon_num3">
//                             <p>4</p>
//                         </div>
//                         <h5>checkout</h5>
//                     </div>
//                     <div className="x_title_num_main_box_wrapper x_title_num_main_box_wrapper3 x_title_num_main_box_wrapper_last">
//                         <div className="x_icon_num x_icon_num3">
//                             <p>5</p>
//                         </div>
//                         <h5>done!</h5>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// )