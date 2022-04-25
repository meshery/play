import styled from "styled-components";

const FooterWrapper = styled.section`
padding: 3.1rem 0 3.1rem 0;
background: #222;

.container{
    display: flex;
    margin: auto;
    max-width: 71.25rem;
}

.footer-links {
    width: 100%;
    margin: 10px;
    padding: 0;
  
    @media #{$tablet} {
      -webkit-flex: 1 0 180px;
      flex: 1 0 180px;
    }
  
    li {
      list-style: none;
      margin: 10px;
  
      @media #{$tablet} {
        max-width: 200px;
      }
      a {
        &:hover {
          text-decoration: none;
        }
        svg {
          fill: #999;
          margin-right: 10px;
          transition: fill 0.2s ease;
          vertical-align: middle;
          position: relative;
          top: -2px;
          width: 22px;
          height: 22px;
        }
  
        &:hover svg {
          fill: #fff;
        }
  
        &.twitter-icon:hover svg {
          fill: #55acee;
        }
  
        &.google-plus-icon:hover svg {
          fill: #db4437;
        }
  
        &.calendar-icon:hover svg {
          fill: #0073cf;
        }
  
        &.dockerhub-icon:hover svg {
          fill: #029cec;
        }
  
        &.youtube-icon:hover svg {
          fill: #cd201f;
        }
  
        &.layer5-icon:hover svg {
          fill: #00b39f;
        }
  
        &.linkedin-icon:hover svg {
          fill: #0077b5;
        }
  
        &.slack-icon:hover svg .first{
          fill: #e91e63;
        }
        &.slack-icon:hover svg .second{
          fill: #e91e63;
        }
        &.slack-icon:hover svg .third{
          fill: #00bcd4;
        }
        &.slack-icon:hover svg .fourth{
          fill: #00bcd4;
        }
        &.slack-icon:hover svg .fifth{
          fill: #4caf50;
        }
        &.slack-icon:hover svg .sixth{
          fill: #4caf50;
        }
        &.slack-icon:hover svg .seventh{
          fill: #ff9800;
        }
        &.slack-icon:hover svg .eigth{
          fill: #ff9800;
        }
  
        &.github-icon:hover svg {
          fill: #fff;
        }
  
        &.rss-icon:hover svg {
          fill: #f26522;
        }
      }
    }
  }
  
  .feed {
    width: 100%;
    margin: 10px;
    padding: 0;
  
    @media #{$tablet} {
      -webkit-flex: 1 0 310px;
      flex: 1 0 310px;
    }
  
    ul {
      list-style: none;
      margin: 10px auto;
  
      @media #{$tablet} {
        max-width: 400px;
      }
    }
  }
  
  
    .copyright {
      font-size: 0.9rem;
      margin-top: 1.5rem;
      padding-top: 1rem;
      border-top: 1px solid #3C494F;
      display: flex;
      justify-content:space-evenly;
      text-align:center;
      @media (max-width:1000px) {
        flex-direction: column;
        text-align: center;
        .text{
          text-align: center;
          padding-top: 10px;
          padding-bottom: 10px;
        }
      }
    }
  
    .layer5-footer {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin: auto;
  
      img {
        width: 120px;
        height: 30px;
      }
    }
  
    &,
    a {
      color: #999;
    }
  
    h2 {
      font-size: 1.2em;
      margin: 30px 0;
      margin: 15px auto;
      color: #ccc;
      font-weight: bold;
    }
  
    .footer-columns {
      @extend %flexbox;
      @include flex-flow(wrap);
    }
  
    a {
      text-decoration: none;
  
      &:hover {
        color: #fff;
      }
    }
  
    .legal-line {
      width: 100%;
      padding: 30px 0;
      margin: 0;
      background-color: #222527;
  
      a {
        font-weight: 600;
      }
    }

.section__particle {
    position: absolute;
    left: 0;
    top: 22%;
    width: 18rem;
}

.footer-head {
    margin: 0px 1.5rem 1.5rem -0.75rem;
    .footer_logo-icons{
        padding: 0rem;
        .footer-logo {
            max-width: 200px;
            height: auto;
        }
    }
}

.desc-info {
    color: #ccc;
    padding-right: 2.25rem;
    font-style: italic;
    font-weight: 200;
    font-size: 1rem;
}

// .footer-sections{
//     flex: auto;
//     padding: 0 1rem;
//     margin-bottom: 1.5rem;

    .section-title{
        font-size: 1.25rem;
        margin-bottom: 1rem;
        color: rgba(255, 255, 255, 0.8);

        .title-link {
            transition: 0.2s all;
            color: rgba(255, 255, 255, 0.8);
            &:hover {
                color: ${props => props.theme.secondaryColor};
            }
        }
    }

    .section-categories {
        padding: 0;
        list-style: none;
        margin: 0;
        font-size: 0.9rem;

        .category-link {
            color: rgba(255, 255, 255, 0.5);
            transition: 0.2s all;

            &:hover{
                color: ${props => props.theme.secondaryColor};
            }
        }
    }
// }

.subscribe {
    font-family: 'Qanelas Soft', sans-serif;
    margin: 0 2.5rem 2rem 0;
    justify-content: flex-end;

    span {
        display: block;
        color: #FFFFFF;
    }

    input {
        padding: 1rem;
        margin-right: 0.25rem;
        width: 20rem;
        height: 3.5rem;
        color: rgba(255, 255, 255, 0.75);
        border: 1px solid #FFFFFF;
        background-color: #000000;
        border-radius: 0.25rem;
    }

    button {
        height: 3.5rem;
    }
}

.footer-bottom{
    display: flex;
    flex: auto;
    border-top: 1px solid #FFFFFF;

    .copyright-text {
        font-size: 0.8rem;
        flex: auto;
        color: #CCCCCC;
    }

    .policies{
        font-size: 0.8rem;
        margin: 0;
        li {
            display: inline-flex;
            a {
                color: #CCCCCC;
            }
            a:hover {
                color: ${props => props.theme.secondaryColor};
            }
        }
        li + li {
            margin-left: 1rem;
        }
    }
}

@media only screen and (max-width: 1720px) {
    .section__particle{
        display: none;
    }
}

@media only screen and (max-width: 1199px) and (min-width: 704px) {
    .subscribe {
        margin-top: -7rem;
    }
}
media only screen and (max-width:704px) and (min-width: 662px){
    .subscribe {
        margin-top: 10px;
    }
}
@media only screen and (max-width: 661px) and (min-width: 470px) {
    .sections_col{
        padding: 0 1rem 0 3rem;
    }

    .odd-col{
        flex: 0 0 60%;
    }

    .even-col {
        flex: 0 0 40%;
    }

    .subscribe {
        margin: 0 2rem 2rem 0;
        justify-content: center;

        input {
            width: 15rem;
        }

        button {
            min-width: 8rem;
        }
    }
}

@media only screen and (max-width: 575px) {
    .footer-head {
        flex-flow: column-reverse;
        margin: 0;

        .footer_logo-icons {
            text-align: center;
        }
    }

    .desc-info {
        padding-right: 0;
        text-align: center;
    }
}

@media screen and (max-width: 469px) {
    .footer-sections{
        .section-title {
            font-size: 1rem;
        }
        .section-categories {
            font-size: 0.85rem;
        }
    }
    .odd-col{
        flex: 0 0 60%;
    }

    .even-col {
        flex: 0 0 40%;
    }

    .subscribe {
        margin: 0 0 2rem 0;
        justify-content: center;

        input {
            width: 12rem;
        }

        button {
            min-width: 6rem;
        }
    }
}

@media screen and (max-width: 767px){
    .footer-bottom{
        padding: 0 1rem;
    }
}
@media screen and (max-width: 445px){
    .footer-bottom{
        .policies {
            text-align: center;
        }

        li + li {
            margin-left: 0 !important;
            text-align: center;
        }
    }
}
`;

export default FooterWrapper;