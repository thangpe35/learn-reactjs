import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeture.propTypes = {};

function AlbumFeture(props) {
    const albumList = [
        {
            id: 1,
            name: "Eat",
            thumnail: 'https://photo-zmp3.zmdcdn.me/banner/8/2/2/f/822f8799a239d87e1853354d4c6f13e3.jpg',
        },
        {
            id: 2,
            name: "Sleep",
            thumnail: 'https://photo-zmp3.zmdcdn.me/banner/9/8/4/4/9844df155bf3e9be83cde590ce2fd370.jpg',
        },
        {
            id: 3,
            name: "Code",
            thumnail: 'https://photo-zmp3.zmdcdn.me/banner/8/7/b/c/87bc8a978acb1b03ea14a7d793c67713.jpg',
        },
    ];
    return (
        <div>
            <h3>Album</h3>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeture;
