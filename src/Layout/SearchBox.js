import React from "react";

export const SearchBox = () => (
    <div className="serach-header">
        <div className="searchbox">
            <button className="close">×</button>
            <form>
                <input type="search" placeholder="Search …" />
                <button type="submit"><i className="fa fa-search" />
                </button>
            </form>
        </div>
    </div>
);