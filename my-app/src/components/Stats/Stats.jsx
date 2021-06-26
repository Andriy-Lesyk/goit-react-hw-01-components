import React from 'react'
import {StatsItems, StItem} from "./Stats.styled"
import user from "../data/user.json"

function Stats() {
    return (
        <StatsItems>
            <StItem>
                <span class="label">Followers</span>
                <span class="quantity">{user.stats.followers}</span>
            </StItem>
            <StItem>
                <span class="label">Views</span>
                <span class="quantity">{user.stats.views}</span>
            </StItem>
            <StItem>
                <span class="label">Likes</span>
                <span class="quantity">{user.stats.likes}</span>
            </StItem>
        </StatsItems>
    )
}

export default Stats
