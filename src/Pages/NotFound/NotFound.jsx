import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import HollowButton from '../../Components/Buttons/HollowButton/HollowButton';
import './NotFound.scss';
/**
 * NotFound component renders a 404 error page with a custom SVG illustration,
 * a message indicating that something went wrong, and a button to navigate back to the homepage.
 *
 * @component
 * @example
 * return (
 *   <NotFound />
 * )
 *
 * @returns {JSX.Element} The rendered NotFound component.
 */
const NotFound = () => {
    return (        
        <>
        <Header></Header>
        <Nav></Nav>
        <div className="svg-wrapper">
            <svg width="598" height="445" viewBox="0 0 598 445" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.6436 214.57H99.0509" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M114.511 214.57H128.26" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22.9814 196.373H138.284" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.4904 196.373H4" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22.9814 179.084H61.2616" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M71.5107 179.084H151.905" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M489.912 358.944H558.835" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M570.045 358.944H580.014" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M503.676 340.746H594" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M496.793 340.746H489.912" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M489.912 323.458H531.433" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M538.864 323.458H570.045" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M230.318 307.446H212.774V338.403H170.277V307.446H106.747V275.721L173.001 178.473H212.776V275.175H230.319L230.318 307.446ZM170.275 275.175V256.579C170.275 253.078 170.401 248.358 170.657 242.412C170.91 236.47 171.109 233.351 171.256 233.06H170.057C167.587 238.675 164.79 243.927 161.667 248.812L144.013 275.175H170.275Z" stroke="#223560" strokeWidth="7" strokeMiterlimit="10"/>
            <path d="M356.612 258.657C356.612 286.953 351.889 307.682 342.446 320.847C333.003 334.01 318.544 340.59 299.078 340.59C280.043 340.59 265.696 333.718 256.034 319.97C246.371 306.225 241.541 285.785 241.541 258.655C241.541 230.214 246.263 209.358 255.706 196.084C265.149 182.812 279.607 176.175 299.076 176.175C318.037 176.175 332.366 183.086 342.064 196.904C351.764 210.727 356.612 231.31 356.612 258.657ZM284.366 258.657C284.366 276.744 285.492 289.178 287.745 295.959C289.995 302.741 293.774 306.132 299.078 306.132C304.452 306.132 308.247 302.632 310.464 295.63C312.68 288.63 313.788 276.306 313.788 258.655C313.788 240.935 312.661 228.517 310.411 221.408C308.157 214.297 304.379 210.743 299.078 210.743C293.774 210.743 289.995 214.172 287.745 221.025C285.492 227.882 284.366 240.426 284.366 258.657Z" stroke="#223560" strokeWidth="7" strokeMiterlimit="10"/>
            <path d="M491.844 307.446H474.3V338.403H431.802V307.446H368.272V275.721L434.526 178.473H474.301V275.175H491.845L491.844 307.446ZM431.802 275.175V256.579C431.802 253.078 431.928 248.358 432.183 242.412C432.436 236.47 432.636 233.351 432.783 233.06H431.584C429.114 238.675 426.315 243.927 423.193 248.812L405.541 275.175H431.802Z" stroke="#223560" strokeWidth="7" strokeMiterlimit="10"/>
            <path d="M519.988 210.626V195.799" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M509.677 214.913L499.234 204.428" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M505.408 225.264H490.638" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M509.677 235.613L499.234 246.098" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M519.988 239.901V254.728" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M530.299 235.613L540.743 246.098" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M534.57 225.264H549.341" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M530.299 214.913L540.743 204.428" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M56.7354 284.455V273.738" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M49.2824 287.555L41.7334 279.977" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M46.1954 295.037H35.5195" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M49.2824 302.518L41.7334 310.096" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M56.7354 305.617V316.334" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M64.1875 302.518L71.7365 310.096" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M67.2744 295.037H77.9517" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M64.1875 287.555L71.7365 279.977" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M345.64 63.0842V52.3657" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M338.187 66.1831L330.638 58.605" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M335.1 73.6641H324.424" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M338.187 81.146L330.638 88.7242" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M345.64 84.2446V94.9618" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M353.092 81.146L360.641 88.7242" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M356.179 73.6641H366.855" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M353.092 66.1831L360.641 58.605" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M138.283 153.001V106.623H378.445V209.671" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M293.797 73.6646V131.73H453.056V158.147" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M144.014 158.754C144.014 161.932 141.448 164.507 138.283 164.507C135.118 164.507 132.553 161.931 132.553 158.754C132.553 155.578 135.119 153.001 138.283 153.001C141.449 153.001 144.014 155.576 144.014 158.754Z" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M293.796 73.6643C296.961 73.6643 299.527 71.0887 299.527 67.9115C299.527 64.7343 296.961 62.1587 293.796 62.1587C290.631 62.1587 288.065 64.7343 288.065 67.9115C288.065 71.0887 290.631 73.6643 293.796 73.6643Z" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M458.787 164.507C458.787 167.684 456.22 170.26 453.056 170.26C449.89 170.26 447.325 167.684 447.325 164.507C447.325 161.329 449.891 158.754 453.056 158.754C456.22 158.754 458.787 161.331 458.787 164.507Z" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M384.175 216.379C384.175 219.555 381.609 222.132 378.445 222.132C375.28 222.132 372.714 219.555 372.714 216.379C372.714 213.201 375.28 210.626 378.445 210.626C381.609 210.626 384.175 213.202 384.175 216.379Z" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M100.934 331.598L87.375 345.209" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M87.375 331.598L100.934 345.209" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M107.715 133.931L94.1553 147.544" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M94.1553 133.931L107.715 147.544" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M547.524 288.229L533.964 301.842" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M533.964 288.229L547.524 301.842" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M162.718 56.2435C158.394 56.2435 154.436 57.8056 151.363 60.3925C148.224 50.9071 139.329 44.0596 128.827 44.0596C117.07 44.0596 107.332 52.6411 105.429 63.8996C104.19 63.5436 102.886 63.3408 101.532 63.3408C93.7137 63.3408 87.377 69.7034 87.377 77.5502C87.377 84.7698 92.745 90.7173 99.6892 91.6266V91.761H162.718C172.489 91.761 180.409 83.8107 180.409 74.0016C180.409 64.1951 172.489 56.2435 162.718 56.2435Z" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M490.709 146.58C493.85 146.58 496.726 147.715 498.959 149.594C501.239 142.704 507.701 137.729 515.33 137.729C523.872 137.729 530.946 143.964 532.328 152.142C533.229 151.883 534.176 151.736 535.16 151.736C540.839 151.736 545.443 156.358 545.443 162.06C545.443 167.305 541.545 171.626 536.499 172.286V172.382H490.71C483.612 172.382 477.858 166.605 477.858 159.481C477.858 152.357 483.61 146.58 490.709 146.58Z" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M553.841 390.629C551.206 390.629 548.795 391.581 546.922 393.157C545.01 387.378 539.59 383.205 533.191 383.205C526.028 383.205 520.095 388.434 518.936 395.294C518.182 395.077 517.387 394.954 516.561 394.954C511.798 394.954 507.937 398.83 507.937 403.612C507.937 408.011 511.207 411.635 515.439 412.188V412.27H553.839C559.792 412.27 564.618 407.427 564.618 401.451C564.618 395.474 559.793 390.629 553.841 390.629Z" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M32.6406 367.796C35.7822 367.796 38.6575 368.931 40.8907 370.81C43.1706 363.919 49.6332 358.944 57.2624 358.944C65.8042 358.944 72.8783 365.179 74.2604 373.358C75.1609 373.099 76.1082 372.952 77.0916 372.952C82.7714 372.952 87.3755 377.574 87.3755 383.276C87.3755 388.521 83.4766 392.842 78.431 393.501V393.598H32.6406C25.5425 393.598 19.7891 387.823 19.7891 380.697C19.7891 373.571 25.5425 367.796 32.6406 367.796Z" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M180.408 47.7238C180.408 47.7238 261.277 -18.4637 371.154 12.029C486.574 44.0596 509.678 126.678 509.678 126.678" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3.27 7.62"/>
            <path d="M58.3044 240.095C26.9537 244.976 11.1934 311.771 46.4577 338.286" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3.05 7.11"/>
            <path d="M453.056 432.822C453.056 432.822 506.76 456.389 530.301 423.51" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3.27 7.62"/>
            <path d="M197.563 164.507V130.463" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M189.378 164.507V147.544" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M322.207 172.383V147.485" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M312.908 170.26V159.934" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M304.658 170.26V153.001" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M205.432 164.507V147.485" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M430.217 169.246V161.63" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M422.032 169.246V150.696" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M438.087 169.246V155.997" stroke="#223560" strokeWidth="7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h1>Щось пішло не так...</h1>
            <p>Спробуйте пізніше або зателефонуйте нам за номером +38 (097) 123 12 31.</p>
            <Link to='/BuxOnline/'>
                <HollowButton width={182}  height={49} fontSize={18} borderRadius={29}><h4>На головну</h4></HollowButton>
            </Link>
        </div>
       
        <Footer></Footer>
        </>
    );
};

export default NotFound;