import React from 'react'
import './CardSkeleton.css'

function CardSkeleton() {
    return (
        <div className="card-skeleton">
            <div className="img-skeleton"></div>
            <div className="rank-skeleton"></div>
            <div className="name-skeleton"></div>
            <div className="type-skeleton"></div>
        </div>
    )
}

export default CardSkeleton
