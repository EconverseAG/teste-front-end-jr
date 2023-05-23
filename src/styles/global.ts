import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {    
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
		scroll-behavior: smooth;
	}

	:root {
    // Color Pink
    --color-pink: #F71963;
    --color-pink-two: #AB3159;

    // Color Gray
    --color-gray: #9F9F9F;
    --color-gray-two: #3F3F40;
    --color-gray-three: #4E4E4E;
    --color-gray-four: #DEDEDE;
    --color-gray-five: #BDBDBD;
    --color-gray-six: #3B3B3B;
    --color-gray-seven: #808080;
    
    // Color Black
    --color-black: #1E1E1E;
    --color-black-two: #2A2A2A;
    --color-black-three: #000000;
    --color-black-four: #222222;
    
    // Color White
    --color-white: #FFFFFF;
    --color-white-two: #F6F5F2;
    --color-white-three: #F4F4F4;
    --color-white-four: #F0F0F0;
    --color-white-five: #F7F5F2;
    --color-white-six: #C0C0C0;
    
    // Color Shadow
    --shadow: rgba(0, 0, 0, 0.13);
    --shadow-two: rgba(57, 48, 19, 0.12);
    --shadow-three: rgba(0, 0, 0, 0.22);
    --shadow-four: rgba(0, 0, 0, 0.54);
    --shadow-five: rgba(0, 0, 0, 0.18);


    // Others Color
    --color-transparent: transparent;
    --color-blue: #041E50;
  }

	body {
    background-color: var(--color-white);
    color: var(--color-gray-two);
  }

  button, a {
		cursor: pointer;
	}

  a {
		text-decoration: none;
	}
`;
