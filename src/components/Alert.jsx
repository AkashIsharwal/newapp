import React from "react";

export default function Alert(props) {
  // console.log(props.alert);
  // console.log(props.message);
  return (
    props.alert&&
    // <div>
      // {/* {props.alert && ( */}
        <>
          <div
            className={`alert alert-${props.message} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{props.alert}</strong>
          </div>
        </>)
}
//       ) }
//     </div>
//   );
// }
