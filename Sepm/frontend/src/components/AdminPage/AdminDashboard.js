import React from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import './style.css'

export default class AdminDashboard extends React.Component {
    render() {
        return (
         <body class="sb-nav-fixed">
         <nav class="sb-topnav navbar navbar-expand navbar-light bg-white shadow-sm">
            <a class="navbar-brand" href="index.html" img alt="logo" src="img/logo.png"> </a>
            <button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i class="fas fa-bars"></i></button>
            {/*<!-- Navbar Search-- */}
            <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
               <div class="input-group">
                  <input class="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                  <div class="input-group-append">
                     <button class="btn btn-primary btn-sm" type="button"><i class="feather-search"></i></button>
                  </div>
               </div>
            </form>
            {/* Navbar*/}
            <ul class="navbar-nav ml-auto ml-md-0">
               <li class="nav-item dropdown no-arrow d-sm-none">
                  <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="feather-search mr-2"></i>
                  </a>
                  {/* Dropdown - Messages*/ }
                  <div class="dropdown-menu dropdown-menu-right p-3 shadow-sm animated--grow-in" aria-labelledby="searchDropdown">
                     <form class="form-inline mr-auto w-100 navbar-search">
                        <div class="input-group">
                           <input type="text" class="form-control border-0 shadow-none" placeholder="Search people, jobs and more..." aria-label="Search" aria-describedby="basic-addon2">
                           <div class="input-group-append">
                              <button class="btn" type="button">
                              <i class="feather-search"></i>
                              </button>
                           </div>
                        </div>
                     </form>
                  </div>
               </li>
               <li class="nav-item dropdown no-arrow mx-1 osahan-list-dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     <i class="feather-message-square"></i>
                     {/* Counter - Alerts */ }
                     <span class="badge badge-danger badge-counter">8</span>
                  </a>
                  {/* Dropdown - Alerts */ }
                  <div class="dropdown-list dropdown-menu dropdown-menu-right shadow-sm">
                     <h6 class="dropdown-header">
                        Message Center
                     </h6>
                     <a class="dropdown-item d-flex align-items-center" href="#">
                        <div class="dropdown-list-image mr-3">
                           <img class="rounded-circle" src="img/user/2.png" alt="">
                           <div class="status-indicator bg-success"></div>
                        </div>
                        <div class="font-weight-bold overflow-hidden">
                           <div class="text-truncate">Hi there! I am wondering if you can help me with a problem I've been having.</div>
                           <div class="small text-gray-500">Emily Fowler · 58m</div>
                        </div>
                     </a>
                     <a class="dropdown-item d-flex align-items-center" href="#">
                        <div class="dropdown-list-image mr-3">
                           <img class="rounded-circle" src="img/user/3.png" alt="">
                           <div class="status-indicator"></div>
                        </div>
                        <div class="overflow-hidden">
                           <div class="text-truncate">I have the photos that you ordered last month, how would you like them sent to you?</div>
                           <div class="small text-gray-500">Jae Chun · 1d</div>
                        </div>
                     </a>
                     <a class="dropdown-item d-flex align-items-center" href="#">
                        <div class="dropdown-list-image mr-3">
                           <img class="rounded-circle" src="img/user/4.png" alt="">
                           <div class="status-indicator bg-warning"></div>
                        </div>
                        <div class="overflow-hidden">
                           <div class="text-truncate">Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>
                           <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                        </div>
                     </a>
                     <a class="dropdown-item d-flex align-items-center" href="#">
                        <div class="dropdown-list-image mr-3">
                           <img class="rounded-circle" src="img/user/5.png" alt="">
                           <div class="status-indicator bg-success"></div>
                        </div>
                        <div class="overflow-hidden">
                           <div class="text-truncate">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>
                           <div class="small text-gray-500">Chicken the Dog · 2w</div>
                        </div>
                     </a>
                     <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                  </div>
               </li>
               <li class="nav-item dropdown no-arrow mx-1 osahan-list-dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     <i class="feather-bell"></i>
                     {/* Counter - Alerts */}
                     <span class="badge badge-info badge-counter">6</span>
                  </a>
                  {/* Dropdown - Alerts */}
                  <div class="dropdown-list dropdown-menu dropdown-menu-right shadow-sm">
                     <h6 class="dropdown-header">
                        Alerts Center
                     </h6>
                     <a class="dropdown-item d-flex align-items-center" href="#">
                        <div class="mr-3">
                           <div class="icon-circle bg-primary">
                              <i class="fas fa-download text-white"></i>
                           </div>
                        </div>
                        <div>
                           <div class="small text-gray-500">December 12, 2020</div>
                           <span class="font-weight-bold">A new monthly report is ready to download!</span>
                        </div>
                     </a>
                     <a class="dropdown-item d-flex align-items-center" href="#">
                        <div class="mr-3">
                           <div class="icon-circle bg-success">
                              <i class="fas fa-edit text-white"></i>
                           </div>
                        </div>
                        <div>
                           <div class="small text-gray-500">December 7, 2020</div>
                           $290.29 has been deposited into your account!
                        </div>
                     </a>
                     <a class="dropdown-item d-flex align-items-center" href="#">
                        <div class="mr-3">
                           <div class="icon-circle bg-warning">
                              <i class="fas fa-folder text-white"></i>
                           </div>
                        </div>
                        <div>
                           <div class="small text-gray-500">December 2, 2020</div>
                           Spending Alert: We've noticed unusually high spending for your account.
                        </div>
                     </a>
                     <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                  </div>
               </li>
               { /* Nav Item - User Information */}
               <li class="nav-item dropdown no-arrow ml-1 osahan-profile-dropdown">
                  <a class="nav-link dropdown-toggle pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img class="img-profile rounded-circle" src="img/user/1.png">
                  <a/>
                  { /* Dropdown - User Information */}
                  <div class="dropdown-menu dropdown-menu-right shadow-sm">
                     <div class="p-3 d-flex align-items-center">
                        <div class="dropdown-list-image mr-3">
                           <img class="rounded-circle" src="img/user/1.png" alt="">
                           <div class="status-indicator bg-success"></div>
                        <div/>
                        <div class="font-weight-bold">
                           <div class="text-truncate">Gurdeep Osahan</div>
                           <div class="small text-gray-500">Restaurants Owner</div>
                        </div>
                     <div>
                     <div class="dropdown-divider"></div>
                     <a class="dropdown-item" href="my-profile.html"><i class="feather-edit"></i> My Account</a>
                     <a class="dropdown-item" href="my-profile.html"><i class="feather-settings"></i> Account Settings</a>
                     <div class="dropdown-divider"></div>
                     <a class="dropdown-item" href="sign-in.html"><i class="feather-log-out"></i> Logout</a>
                  </div>
               <li/>
            <ul/>
         </nav>
         <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
               <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                  <div class="sb-sidenav-menu">
                     <div class="nav">
                        <div class="sb-sidenav-menu-heading">Core</div>
                        <a class="nav-link" href="index.html">
                           <div class="sb-nav-link-icon"><i class="feather-home"></i></div>
                           Dashboard
                        </a>
                        <a class="nav-link" href="messages.html">
                           <div class="sb-nav-link-icon"><i class="feather-message-square"></i></div>
                           Messages
                        </a>
                        <a class="nav-link" href="bookings.html">
                           <div class="sb-nav-link-icon"><i class="feather-calendar"></i></div>
                           Bookings <span class="badge badge-pill ml-2 badge-primary">6 New</span>
                        </a>
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayoutss" aria-expanded="false" aria-controls="collapseLayoutss">
                           <div class="sb-nav-link-icon"><i class="feather-list"></i></div>
                           My listings
                           <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="collapseLayoutss" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                           <nav class="sb-sidenav-menu-nested nav">
                              <a class="nav-link" href="listings.html">Pending <span class="badge badge-pill ml-2 badge-primary">6</span></a>
                              <a class="nav-link" href="listings.html">Active <span class="badge badge-pill ml-2 badge-success">5</span></a>
                              <a class="nav-link" href="listings.html">Expired <span class="badge badge-pill ml-2 badge-danger">4</span></a>                                
                           </nav>
                        </div>
                        <a class="nav-link" href="reviews.html">
                           <div class="sb-nav-link-icon"><i class="feather-star"></i></div>
                           Reviews
                        </a>
                        <a class="nav-link" href="bookmarks.html">
                           <div class="sb-nav-link-icon"><i class="feather-heart"></i></div>
                           Bookmarks
                        </a>
                        <a class="nav-link" href="add-listing.html">
                           <div class="sb-nav-link-icon"><i class="feather-plus-circle"></i></div>
                           Add listing
                        </a>
                        <a class="nav-link" href="add-listing-with-menu-list.html">
                           <div class="sb-nav-link-icon"><i class="feather-book-open"></i></div>
                           Menu List
                        </a>
                        <a class="nav-link" href="orders.html">
                           <div class="sb-nav-link-icon"><i class="feather-shopping-cart"></i></div>
                           Orders Page
                        </a>
                        <a class="nav-link" href="edit-order.html">
                           <div class="sb-nav-link-icon"><i class="feather-settings"></i></div>
                           Edit Order
                        </a>
                        <a class="nav-link" href="my-profile.html">
                           <div class="sb-nav-link-icon"><i class="feather-user"></i></div>
                           My Profile
                        </a>
                        <div class="sb-sidenav-menu-heading">Interface</div>
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                           <div class="sb-nav-link-icon"><i class="feather-layout"></i></div>
                           Layouts
                           <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                           <nav class="sb-sidenav-menu-nested nav">
                              <a class="nav-link" href="layout-static.html">Static Navigation</a>
                              <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                           </nav>
                        </div>
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                           <div class="sb-nav-link-icon"><i class="feather-book"></i></div>
                           Pages
                           <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                           <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                              <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                 Authentication
                                 <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                              </a>
                              <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                 <nav class="sb-sidenav-menu-nested nav">
                                    <a class="nav-link" href="login.html">Login</a>
                                    <a class="nav-link" href="register.html">Register</a>
                                    <a class="nav-link" href="password.html">Forgot Password</a>
                                 </nav>
                              </div>
                              <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                 Error
                                 <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                              </a>
                              <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                 <nav class="sb-sidenav-menu-nested nav">
                                    <a class="nav-link" href="401.html">401 Page</a>
                                    <a class="nav-link" href="404.html">404 Page</a>
                                    <a class="nav-link" href="500.html">500 Page</a>
                                 </nav>
                              </div>
                           </nav>
                        </div>
                        <div class="sb-sidenav-menu-heading">Addons</div>
                        <a class="nav-link" href="charts.html">
                           <div class="sb-nav-link-icon"><i class="feather-pie-chart"></i></div>
                           Charts
                        </a>
                        <a class="nav-link" href="tables.html">
                           <div class="sb-nav-link-icon"><i class="feather-grid"></i></div>
                           Tables
                        </a>
                     </div>
                  </div>
                  <div class="sb-sidenav-footer">
                     <div class="small">Logged in as:</div>
                     Ask Bootstrap
                  </div>
               </nav>
            </div>
            <div id="layoutSidenav_content">
               <main/>
                  <div class="container-fluid">
                     <h1 class="mt-4">Dashboard</h1>
                     <ol class="breadcrumb mb-4">
                        <li class="breadcrumb-item active">Dashboard</li>
                     </ol>
                     <div class="row">
                        <div class="col-xl-3 col-md-6">
                           <div class="card bg-primary text-white mb-4">
                              <div class="card-body">26 New Messages!</div>
                              <div class="card-footer d-flex align-items-center justify-content-between">
                                 <a class="small text-white stretched-link" href="messages.html">View Details</a>
                                 <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-3 col-md-6">
                           <div class="card bg-warning text-white mb-4">
                              <div class="card-body">10 New Bookings!</div>
                              <div class="card-footer d-flex align-items-center justify-content-between">
                                 <a class="small text-white stretched-link" href="bookings.html">View Details</a>
                                 <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-3 col-md-6">
                           <div class="card bg-success text-white mb-4">
                              <div class="card-body">11 New Reviews!</div>
                              <div class="card-footer d-flex align-items-center justify-content-between">
                                 <a class="small text-white stretched-link" href="reviews.html">View Details</a>
                                 <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-3 col-md-6">
                           <div class="card bg-danger text-white mb-4">
                              <div class="card-body">10 New Bookmarks!</div>
                              <div class="card-footer d-flex align-items-center justify-content-between">
                                 <a class="small text-white stretched-link" href="bookmarks.html">View Details</a>
                                 <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-xl-6">
                           <div class="card mb-4">
                              <div class="card-header">
                                 <i class="fas fa-chart-area mr-1"></i>
                                 Sales earnings this month
                              </div>
                              <div class="card-body">
                                 <canvas id="myAreaChart" width="100%" height="40"></canvas>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-6">
                           <div class="card mb-4">
                              <div class="card-header">
                                 <i class="fas fa-chart-bar mr-1"></i>
                                 All Time Earnings
                              </div>
                              <div class="card-body">
                                 <canvas id="myBarChart" width="100%" height="40"></canvas>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="card mb-4">
                        <div class="card-header">
                           <i class="fas fa-table mr-1"></i>
                           RECENT 10 ORDER
                        </div>
                        <div class="card-body">
                           <div class="table-responsive">
                              <table class="table" id="dataTable" width="100%" cellspacing="0">
                                 <thead>
                                    <tr class="text-uppercase">
                                       <th>User</th>
                                       <th>User Name</th>
                                       <th>Restaurant</th>
                                       <th>Status</th>
                                       <th>Ordered on</th>
                                       <th>Total</th>
                                       <th>Quantity</th>
                                       <th>Action</th>
                                    </tr>
                                 </thead>
                                 <tbody/>
                  
                                    <tr>
                                       <td><img class="img-profile rounded-circle" src="img/user/1.png"></td>
                                       <td> Rhona Davidson	</td>
                                       <td>Metro Resto</td>
                                       <td><button disabled="" type="button" class="btn btn-sm btn-success btn-round">delivered</button></td>
                                       <td>Sat, Jul 11, 2020 1:38 AM</td>
                                       <td>$262.49</td>
                                       <td>4</td>
                                       <td><a href="edit-order.html" class="btn btn-primary btn-sm">View</a></td>
                                    </tr>
                                    <tr>
                                       <td><img class="img-profile rounded-circle" src="img/user/2.png"></td>
                                       <td> Herrod Chandler	</td>
                                       <td>Metro Resto</td>
                                       <td><button disabled="" type="button" class="btn btn-sm btn-danger btn-round">cancel</button></td>
                                       <td>Fri, Jul 10, 2020 4:55 PM</td>
                                       <td>$170.77</td>
                                       <td>5</td>
                                       <td><a href="edit-order.html" class="btn btn-primary btn-sm">View</a></td>
                                    </tr>
                                    <tr>
                                       <td><img class="img-profile rounded-circle" src="img/user/3.png"></td>
                                       <td> Airi Satou	</td>
                                       <td>Metro Resto</td>
                                       <td><button disabled="" type="button" class="btn btn-sm btn-success btn-round">delivered</button></td>
                                       <td>Fri, Jul 10, 2020 3:48 PM</td>
                                       <td>$26.78</td>
                                       <td>2</td>
                                       <td><a href="edit-order.html" class="btn btn-primary btn-sm">View</a></td>
                                    </tr>
                                    <tr>
                                       <td><img class="img-profile rounded-circle" src="img/user/4.png"></td>
                                       <td> Brielle Williamson	</td>
                                       <td>The Square restaurants</td>
                                       <td><button disabled="" type="button" class="btn btn-sm btn-primary btn-round">created</button></td>
                                       <td>Fri, Jul 10, 2020 2:24 PM</td>
                                       <td>$81.23</td>
                                       <td>2</td>
                                       <td><a href="edit-order.html" class="btn btn-primary btn-sm">View</a></td>
                                    </tr>
                                    <tr>
                                       <td><img class="img-profile rounded-circle" src="img/user/5.png"></td>
                                       <td> Cedric Kelly	</td>
                                       <td>Metro Resto</td>
                                       <td><button disabled="" type="button" class="btn btn-sm btn-success btn-round">delivered</button></td>
                                       <td>Fri, Jul 10, 2020 11:45 AM</td>
                                       <td>$1578.00</td>
                                       <td>1</td>
                                       <td><a href="edit-order.html" class="btn btn-primary btn-sm">View</a></td>
                                    </tr>
                                    <tr>
                                       <td><img class="img-profile rounded-circle" src="img/user/6.png"></td>
                                       <td> Ashton Cox	</td>
                                       <td>The Square restaurants</td>
                                       <td><button disabled="" type="button" class="btn btn-sm btn-primary btn-round">created</button></td>
                                       <td>Fri, Jul 10, 2020 11:37 AM</td>
                                       <td>$238.53</td>
                                       <td>4</td>
                                       <td><a href="edit-order.html" class="btn btn-primary btn-sm">View</a></td>
                                    </tr>
                                    <tr>
                                       <td><img class="img-profile rounded-circle" src="img/user/1.png"></td>
                                       <td> Garrett Winters	</td>
                                       <td>Metro Resto</td>
                                       <td><button disabled="" type="button" class="btn btn-sm btn-danger btn-round">rejected</button></td>
                                       <td>Thu, Jul 9, 2020 3:54 PM</td>
                                       <td>$107.85</td>
                                       <td>2</td>
                                       <td><a href="edit-order.html" class="btn btn-primary btn-sm">View</a></td>
                                    </tr>
                                    <tr>
                                       <td><img class="img-profile rounded-circle" src="img/user/2.png"></td>
                                       <td> Tiger Nixon	</td>
                                       <td>The Square restaurants</td>
                                       <td><button disabled="" type="button" class="btn btn-sm btn-danger btn-round">rejected</button></td>
                                       <td>Thu, Jul 9, 2020 3:19 PM</td>
                                       <td>$83.65</td>
                                       <td>2</td>
                                       <td><a href="edit-order.html" class="btn btn-primary btn-sm">View</a></td>
                                    </tr>
                                    <tr>
                                       <td><img class="img-profile rounded-circle" src="img/user/3.png"></td>
                                       <td> AMITKUMAR CHAUHAN</td>
                                       <td>Jassi de Parathe</td>
                                       <td><button disabled="" type="button" class="btn btn-sm btn-primary btn-round">created</button></td>
                                       <td>Thu, Jul 9, 2020 2:28 PM</td>
                                       <td>$46.62</td>
                                       <td>2</td>
                                       <td><a href="edit-order.html" class="btn btn-primary btn-sm">View</a></td>
                                    </tr>
                                    <tr>
                                       <td><img class="img-profile rounded-circle" src="img/user/4.png"></td>
                                       <td> Umed Ibodulloev</td>
                                       <td>Metro Resto</td>
                                       <td><button disabled="" type="button" class="btn btn-sm btn-success btn-round">delivered</button></td>
                                       <td>Thu, Jul 9, 2020 1:26 PM</td>
                                       <td>$66.71</td>
                                       <td>1</td>
                                       <td><a href="edit-order.html" class="btn btn-primary btn-sm">View</a></td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>
               </main>
               <footer class="py-4 bg-light mt-auto">
                  <div class="container-fluid">
                     <div class="d-flex align-items-center justify-content-between small">
                        <div class="text-muted">Copyright &copy; Your Website 2020</div>
                        <div>
                           <a href="#">Privacy Policy</a>
                           &middot;
                           <a href="#">Terms &amp; Conditions</a>
                        </div>
                     </div>
                  </div>
               </footer>
            </div>
         </div>
         
         </body>
        )
      }
   }
