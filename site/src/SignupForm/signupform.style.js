import styled from "styled-components";

const SignupFormWrapper = styled.section`

	.required-sign {
		color: #8B0000;
	}

	.desc-text {
		margin: 1rem auto;
	}

  .accounts{
    p {
			font-size: 0.9rem;
			line-height: 0.9rem;
			color: #aaa;
    }
    .accounts_group{
      margin: 0 1rem 0 1rem;
    }
  }

	.form {
		font-size: .8725rem;
		margin: 0rem 0rem 0rem 0rem;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: #1E2117;
		color: #ccc;

		.form-group {
			column-gap: 10px;
			display: flex;
			align-self: stretch ;
			justify-content: center;
		}
		.form-field {
			font-weight: 600;
			min-width: 40%;
			margin: auto;
			text-align: right ;
		}

		.text-field {
			flex-basis: max-content;
			border: 1px solid gray;
			border-radius: 0.45rem;
			padding: .5rem;
			font-size: 1rem;
			min-width: 50%;
		}
		.form-radio {
			display: flex;
			flex-direction: column;
			justify-content: center;
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