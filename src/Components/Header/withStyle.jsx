import styled from 'styled-components';

export default component => styled(component)`
	.search {
		position: relative;
		margin-left: 500%;
		width: 150%;
		border-radius: 2px;
		padding: 2px;
		background-color: #b2bec3;
	}
	.search-icon {
		height: 90%;
		position: absolute;
		margin-left: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.input-root {
		color: white;
		margin-left: 15%;
		width: 80%;
	}

	.logout {
		margin-left: 80%;
		cursor: pointer;
	}

	.logout:hover {
		background-color: rgba(60, 64, 67, 0.2);
		border-radius: 50%;
		outline: none;
	}

	.app-bar {
		box-shadow: none;
	}
	.logo {
		width: 50px;
		height: 50px;
	}

	.logo:hover {
		border-radius: 50px;
		background-color: rgba(60, 64, 67, 0.2);
		outline: none;
	}
`;
