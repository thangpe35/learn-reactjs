import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

Album.propTypes = {
    album: PropTypes.object,
};

function Album({album}) {
    return (
        <div className="album">
            <div className="album_thumnail">
                <img src={album.thumnail} alt="" />
            </div>
            <p className="album_name">{album.name}</p>
        </div>
    );
}

export default Album;
