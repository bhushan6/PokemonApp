import React from 'react'
import './CardSkeleton.css'

function CardSkeleton() {
    return (
        <div class="card-skeleton">
            <div class="img-skeleton"></div>
            <div class="rank-skeleton"></div>
            <div class="name-skeleton"></div>
            <div class="type-skeleton"></div>
        </div>
    )
}

export default CardSkeleton
