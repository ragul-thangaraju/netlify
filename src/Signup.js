import React, { Component } from 'react'
 
class Signup extends Component {

	componentDidMount = () => {
		if (navigator.platform) {
      setTimeout(function () {
			const iOS =
          !!navigator.platform &&
          /iPad|iPhone|iPod|MacIntel/.test(navigator.platform);
        if (iOS) {
          window.location.href =
            "https://apps.apple.com/us/app/embassy-influencer-marketplace/id1544463192";
        } else {
          window.location.href =
            "https://play.google.com/store/apps/details?id=io.embassysocial";
        }
      }, 2000);
		}
	}

    render() {
      return (
        <>
          <div class="loader"></div>
        </>
      )
    }
}

export default Signup;
