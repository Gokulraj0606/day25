import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function BlankPage() {
    return(
        <div id="wrapper">

        {/* <!-- Sidebar --> */}
        <Sidebar />
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

                {/* <!-- Topbar --> */}
                <Topbar />
                {/* <!-- End of Topbar --> */}

                {/* <!-- Begin Page Content --> */}
                <div className="container-fluid">

                    {/* <!-- Page Heading --> */}
                    <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>

                </div>
                {/* <!-- /.container-fluid --> */}

            </div>
            </div>
            </div>
            // {/* <!-- End of Main Content --></div> */}
    )
}

export default BlankPage;