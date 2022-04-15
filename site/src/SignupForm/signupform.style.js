import styled from "styled-components";

const SignupFormWrapper = styled.section`

	.required-sign {
		color: #8B0000;
	}

	.desc-text {
		margin: 1rem auto;
	}

  .accounts{
    p{
			width: 85%;
			font-size: 0.9rem;
			line-height: 0.9rem;
			color: #3C494F;
    }
    .accounts_group{
      margin: 0 1rem 0 1rem;
    }
  }

	.form {
		font-size: 1.1125rem;
		margin: 0 1rem 1rem;
		padding: 1rem;

		label {
			display: block;
		}
		
		.form-name {
			font-weight: 600;
			margin: 1.5rem 0 0.5rem 0.25rem;
			display: block;
		}

		.text-field {
			width: 85%;
			border: 1px solid black;
			border-radius: 0.75rem;
			padding: 1rem .5rem;
			font-size: 1.25rem;
		}

		input[type="radio" i] {
			margin: 0.5rem;
		}

		.text-field:focus {
			border: 2px solid #00B39F;
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