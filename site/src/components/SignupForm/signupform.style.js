import styled from "styled-components";

const SignupFormWrapper = styled.section`

* {
	box-sizing: border-box;
}

	.form-page{
		display:flex;
		justify-content: center;
		margin-top: 2rem;
		@media only screen and (max-width: 1024px){
			display:flex;
			flex-wrap: wrap;
		}
	}

	.required-sign {
		color: #b30000;
	}

	.desc-text {
		margin: 1rem;
		width: 50%;
		text-align: justify;
		p{
			font-size: 1.35rem;
		}

		@media screen and (max-width: 1024px) {
			div {
				displya: block;
			}
			margin: 1rem 1rem 2rem 1rem;
			width: 100%;
			text-align: start;
		}
	}

	.accounts{
	  margin-top: 1rem;
    p {
			font-size: 0.8rem;
			line-height: 0.9rem;
			color: #aaa;
    }
    .accounts_group{
      margin: 0 1rem 0 1rem;
    }
  }

  select {
    /* for Firefox */
    -moz-appearance: none;
    /* for Chrome */
    -webkit-appearance: none;
  }
  
  /* For IE10 */
  select::-ms-expand {
    display: none;
  }

  .form-container{
	  margin: 1rem;
	  height: 100%;
	  width: 50%;
		box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.75);
       
	  @media only screen and (max-width: 1024px){
			margin: 2rem 0 ;
			width: 90%;
		}

		.form-title {
			padding: 1rem;
			text-align: center;
			background-color: #00b39f;
			color: white;
		}

		.form1 {
			font-size: .8725rem;
			padding: 2rem;
			display: flex;
			min-width: 20rem;
			flex-flow: column wrap;
			align-content: fcenter;
			justify-content: center;
			background-color: #1E2117;
			color: #ccc;

			@media only screen and (max-width: 568px){
				min-width: 8rem
			}

			label {
				display: block;
			}
			
			.form-name {
				font-weight: 600;
				margin: 20px 0px 5px 3px;
				display: block;
			}

			.text-field {
				width: 100%;
				border: 1px solid black;
				border-radius: 10px;
				padding: 1rem .5rem;
				font-size: .85rem;
				margin-top: 0.5rem;
				
				&:focus {
					border: 2px solid #00B39F;
				}
			}

			.form-field{
				margin-top: 1rem;
				font-size: 0.9rem;
			}

			select {
				padding: 1rem 0.5rem;
				margin: 0.5rem 0;
				background: none repeat scroll 0 0 #FFFFFF;
				border: 1px solid black;
				border-radius: 10px;
				height: 50px;
				width: 100%;
				font-size: .85rem;
			}

			.custom-arrow {
				background-color: white;
				width: 2rem;
				height: 2.65rem;
				position: absolute;
				right: 2.75rem;
				bottom: 12.35rem;
				pointer-events: none;

				.down-arrow {
					position: relative;
					top: 0.5rem;
					left: 0.5rem;
					border: solid black;
					border-width: 0 3px 3px 0;
					display: inline-block;
					padding: 5px;
					transform: rotate(45deg);
					pointer-events: none;
				}

				@media screen and (max-width: 1024px) {
					bottom: 11.35rem;
					right: 1.75rem;
				}
			}
			
			.submit-btn {
				margin: 3rem auto;
				padding: 1rem 1.5rem;
				font-size: 1.35rem;
				display: block;
				border: 0;
				border-radius: 0.5rem;
				background: #00B39F;
				color: #FFF;
				&:hover {
					cursor: pointer;
					box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
				}
			}

			@media only screen and (max-width: 300px) {
				margin-left: 0;
				margin-right: 0;
			}
		}
	}

	.thankyou-box {
		text-align: center;
		padding: 2rem;
		margin: 3rem auto;
		background-color: #1E2117;
		border-radius: 2rem;
		
		h2, h3 {
			color: #FFF;
		}
		h2{
			margin-top: 1rem;
			margin-bottom: 2rem;
		}
		p {
			margin-top: .85rem;
			color: #FFF;
		}
		img {
			width: 10rem;
		}
	}
`;

export default SignupFormWrapper;