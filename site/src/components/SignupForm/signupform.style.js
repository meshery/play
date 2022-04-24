import styled from "styled-components";

const SignupFormWrapper = styled.section`
.Form-page{
	display:flex;
	margin: 0 1rem;
	@media only screen and (max-width: 992px){
		display: block;
	}
}
	.required-sign {
		color: #8B0000;
	}
	.desc-text {
		margin: 1rem;
		p{
		font-size: 1.35rem;
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
  .form-container{
	  margin: 1rem;
	  box-shadow: 0px 1px 11px 2px rgb(30 33 23 / 50%)
       
	  @media only screen and (max-width: 1000px){
		margin: 2rem 0 ;
	}

  .form-title {
    width: 100%;
	padding: 1rem;
	text-align: center;
	background-color: #00b39f;
	color: white;
   }
	.form1 {
		font-size: .8725rem;
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
			margin-right: 0.5rem;
        }

        .text-field:focus {
          border: 2px solid #00B39F;

        }

		.form-field{
			margin-top: 0.5rem;
			font-size: 0.9rem;
		}

		.formRight select {
			background: none repeat scroll 0 0 #FFFFFF;
			border: 1px solid black;
			border-radius: 10px;
			height: 50px;
			padding: 1rem .5rem;
			width: 100%;
			font-size: .85rem;
			
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