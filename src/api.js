import axios from "axios";

const searchImages = async (term) => {
	const response = await axios.get("https://api.unsplash.com/search/photos", {
		headers: {
			Authorization: "Client-ID _E3N0NpiLgaNcFX6XQcq1zg3UNVdsenkyP0wXWC3geo",
		},
		params: {
			query: term,
		},
	});

	return response.data.results;
};

export default searchImages;
