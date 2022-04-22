import styled from "styled-components";

const SignupFormWrapper = styled.section`
.Form-page{
	display:flex;
	margin: 0 4rem;
}
	.required-sign {
		color: #8B0000;
	}
	.desc-text {
		margin: 3rem;
		p{
		font-size: 1.5rem;
		}
	}
  .accounts{
	  margin-top: 1rem;
    p {
			font-size: 0.9rem;
			line-height: 0.9rem;
			color: #aaa;
    }
    .accounts_group{
      margin: 0 1rem 0 1rem;
    }
  } 
  .form-container{
	  width: 200rem;
	  margin: 1rem;
  .form-title {
	padding: 1rem;
	text-align: center;
	background-color: #00b39f;
	color: white;
	width: 100%;
	box-shadow: 0px 0px 5px 2px ${props => props.theme.primaryLightColor};
}
	.form1 {
		font-size: .8725rem;
		box-shadow: 0px 10px 10px 2px rgba(0, 179, 159, 0.5);
		width: 100%;
		padding: 1rem;
		display: flex;
		flex-flow: column wrap;
		align-content: flex-start;
		justify-content: flex-start;
		background-color: #1E2117;
		color: #ccc;
		label {
            display: block;
        }
        
        .form-name {
            font-weight: 600;
            margin: 20px 0px 5px 3px;
            display: block;
            
        }

        .text-field {
            width: 95%;
            border: 1px solid black;
            border-radius: 10px;
            padding: 1rem .5rem;
            font-size: .85rem;
			margin-top: 0.5rem;
        }

        .text-field:focus {
          border: 2px solid #00B39F;

        }

		.form-field{
			margin-top: 0.5rem;
			font-size: 1rem;
		}

        .form-select {
            width: 150px;
            border: 1px solid black;
            border-radius: 10px;
            padding: 1rem .5rem;
        }

        .form-check {
          width: 20px;
          height: 20px;
          border-radius: 15px;
          margin: 2px 10px !important;
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
		@media only screen and (max-width: 600px) {
			.submit-btn {
				width: 50%;
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