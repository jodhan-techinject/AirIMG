import React from "react";
import {useState, useEffect} from "react";
import Card from "../components/Card.jsx";
import Formfield from "../components/Formfield.jsx";
import Loader from "../components/loader.jsx";
import {toast} from "react-toastify";

const RenderCards = ({data, title}) => {
    if (data?.length > 0) {
        return data.map((post) => <Card key={post._id} {...post} />);
    }
    return (
        <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
    );
};

const ExploreSection = () => {
    const [loading, setLoading] = useState(false);
    const [allPosts, setAllPosts] = useState(null);

    const [searchText, setSearchText] = useState("");
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchedResults, setSearchedResults] = useState(null);

    const fetchPosts = async () => {
        setLoading(true);

        try {
            // const response = await fetch("https://airimg.onrender.com/api/v1/post", {
            const response = await fetch("http://localhost:8080/api/v1/post", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const result = await response.json();
                setAllPosts(result.data.reverse());
            }
        } catch (err) {
            console.log(err);
            toast(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        async function fetchPostsData() {
            try {
                await fetchPosts();
            } catch (error) {
                console.error("Failed to fetch posts:", error);
            }
        }

        fetchPostsData();
    }, []);

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);
        setSearchText(e.target.value);

        setSearchTimeout(
            setTimeout(() => {
                const searchResult = allPosts.filter(
                    (item) =>
                        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
                        item.prompt.toLowerCase().includes(searchText.toLowerCase())
                );
                setSearchedResults(searchResult);
            }, 500)
        );
    };

    return (
        <section className="max-w-7xl mx-auto pb-20 p-5 z-50">
            <p className="mt-2 text-gray-400 text-lg font-poppins pl-1">
                Browse through a collection of AI images generated by our community
            </p>

            <div className="mt-3">
                <Formfield
                    labelName="Search posts"
                    type="text"
                    name="text"
                    placeholder="Search prompt or user name..."
                    value={searchText}
                    handleChange={handleSearchChange}
                />
            </div>

            <div className="mt-10">
                {loading ? (
                    <div className="flex justify-center items-center">
                        <Loader/>
                    </div>
                ) : (
                    <>
                        {searchText && (
                            <h2 className="font-medium text-[#666e75] text-xl mb-3">
                                Showing Resuls for{" "}
                                <span className="text-[#222328]">{searchText}</span>:
                            </h2>
                        )}
                        <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-10">
                            {searchText ? (
                                <RenderCards
                                    data={searchedResults}
                                    title="No Search Results Found"
                                />
                            ) : (
                                <RenderCards data={allPosts} title="No Posts Yet"/>
                            )}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default ExploreSection;
