import React, {Component} from 'react';
import './resources/static/homepage.css';
import PageWrapper from './resources/templates/PageWrapper';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import HeaderSection from './resources/templates/HeaderSection';
import Breadcrumb from './resources/templates/Breadcrumb';
import ContentWrapper from './resources/templates/ContentWrapper';
import SideNav from './resources/templates/SideNav';
import Footer from './resources/templates/Footer';
import HomeCards from './resources/templates/HomeCards';
import Boardrooms from './resources/templates/Boardrooms';
import CreateBoardroom from './resources/templates/CreateBoardroom';
import CreateMeeting  from './resources/templates/CreateMeeting';
import CreateOrganization from './resources/templates/CreateOrganization';
import CreateUser from './resources/templates/CreateUser';
import EditBoardroom from './resources/templates/EditBoardroom';
import EditMeeting from './resources/templates/EditMeeting';
import EditProfile from './resources/templates/EditProfile';
import EditUser from './resources/templates/EditUser';
import Forgot from './resources/templates/Forgot';
import ForgotForm from './resources/templates/ForgotForm';
import Register from './resources/templates/Register';
import Scheduled from './resources/templates/Scheduled';
import UserManager from './resources/templates/UserManager';
import Login from './resources/templates/Login';
import Landing from './resources/templates/Landing';
import {connect} from 'react-redux';

class App extends Component{
  render(){
    return(
      <Router>
        <Routes>

          <Route
            path='/'
            exact={true}
            element={<Landing />}
          />

          <Route
            path='/createOrg'
            element={<PageWrapper><HeaderSection><CreateOrganization /><Footer /></HeaderSection></PageWrapper>}
          />

          <Route
            path='/forgot'
            element={<PageWrapper><HeaderSection><Forgot /><Footer /></HeaderSection></PageWrapper>}
          />

          <Route
            path='/forgotForm'
            element={<PageWrapper><HeaderSection><ForgotForm /><Footer /></HeaderSection></PageWrapper>}
          />

          <Route
            path='/register'
            element={<PageWrapper><HeaderSection><Register /><Footer /></HeaderSection></PageWrapper>}
          />

          <Route
            path='/login'
            element={
              <PageWrapper>
                {this.props.auth.token ?
                  <HeaderSection>
                    <Breadcrumb />
                    <ContentWrapper>
                      <SideNav />
                      <HomeCards />
                    </ContentWrapper>
                    <Footer />
                  </HeaderSection>
                  :
                  <HeaderSection>
                    <Login />
                    <Footer />
                  </HeaderSection>
                }

              </PageWrapper>
            }
          />

          <Route
            path='/home'
            element={
              <PageWrapper>
                <HeaderSection>
                  <Breadcrumb />
                  <ContentWrapper>
                    <SideNav />
                    <HomeCards />
                  </ContentWrapper>
                  <Footer />
                </HeaderSection>
              </PageWrapper>
            }
          />

          <Route
            path='/boardrooms'
            element={<PageWrapper><HeaderSection>
              <Breadcrumb />
              <ContentWrapper>
                <SideNav />
                <Boardrooms />
              </ContentWrapper>
              <Footer /></HeaderSection></PageWrapper>}
          />

          <Route
            path='/createRoom'
            element={<PageWrapper><HeaderSection>
              <Breadcrumb />
              <ContentWrapper>
                <SideNav />
                <CreateBoardroom />
              </ContentWrapper>
              <Footer /></HeaderSection></PageWrapper>}
          />

          <Route
            path='/createMeet'
            element={<PageWrapper><HeaderSection>
              <Breadcrumb />
              <ContentWrapper>
                <SideNav />
                <CreateMeeting />
              </ContentWrapper>
              <Footer /></HeaderSection></PageWrapper>}
          />

          <Route
            path='/createUser'
            element={<PageWrapper><HeaderSection>
              <Breadcrumb />
              <ContentWrapper>
                <SideNav />
                <CreateUser />
              </ContentWrapper>
              <Footer /></HeaderSection></PageWrapper>}
          />

          <Route
            path='/editBoard'
            element={<PageWrapper><HeaderSection>
              <Breadcrumb />
              <ContentWrapper>
                <SideNav />
                <EditBoardroom />
              </ContentWrapper>
              <Footer /></HeaderSection></PageWrapper>}
          />

          <Route
            path='/EditMeet'
            element={<PageWrapper><HeaderSection>
              <Breadcrumb />
              <ContentWrapper>
                <SideNav />
                <EditMeeting />
              </ContentWrapper>
              <Footer /></HeaderSection></PageWrapper>}
          />

          <Route
            path='/profile'
            element={<PageWrapper><HeaderSection>
              <Breadcrumb />
              <ContentWrapper>
                <SideNav />
                <EditProfile />
              </ContentWrapper>
              <Footer /></HeaderSection></PageWrapper>}
          />

          <Route
            path='/editUser'
            element={<PageWrapper><HeaderSection>
              <Breadcrumb />
              <ContentWrapper>
                <SideNav />
                <EditUser />
              </ContentWrapper>
              <Footer /></HeaderSection></PageWrapper>}
          />

          <Route
            path='/meetings'
            element={<PageWrapper><HeaderSection>
              <Breadcrumb />
              <ContentWrapper>
                <SideNav />
                <Scheduled />
              </ContentWrapper>
              <Footer /></HeaderSection></PageWrapper>}
          />

          <Route
            path='/users'
            element={<PageWrapper><HeaderSection>
              <Breadcrumb />
              <ContentWrapper>
                <SideNav />
                <UserManager />
              </ContentWrapper>
              <Footer /></HeaderSection></PageWrapper>}
          />

        </Routes>
      </Router>
      
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch =>{
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (App);
