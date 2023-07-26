import React from 'react';

class MovieCard extends React.Component {
    // addStars = () => {

    //     if (this.state.stars >= 5){
    //         return;
    //     }
    //     // form 1
    //     // this.setState({
    //     //     stars: this.state.stars + 0.5
    //     // })

    //     //form 2
    //     this.setState((pState) => {
    //         return{
    //             stars: pState.stars + 0.5
    //         }
    //     })
    //     // this.state.stars += 0.5;
    //     // console.log('this.state: ', this.state);
    // };

    // removeStars = () => {
    //     if (this.state.stars <= 0){
    //         return;
    //     }

    //     this.setState((pState) => {
    //         return{
    //             stars: pState.stars -0.5
    //         }
    //     })
    // }

    // handlefav = () => {
    //     this.setState({
    //         fav: !this.state.fav
    //     })
    // }

    // handleCart = () => {
    //     this.setState({
    //         addCart: !this.state.addCart
    //     })
    // }


    render() {
        const {movies, addStars} = this.props;
        const {title, plot, poster, price, rating, stars, fav, addCart } = this.props.movies;
        return (
            <div className='main'>
                <div className='movie-card'>
                    <div className='left'>
                        <img alt='Poster' src={poster} />
                    </div>
                    <div className='right'>
                        <div className='title'> {title} </div>
                        <div className='plot'> {plot} </div>
                        <div className='price'> {price} </div>

                        <div className='footer'>
                            <div className='rating'> {rating} </div>
                            <div className='star-dis'>
                                <img onClick={this.removeStars} className='str-btn' alt='decrease' src='https://cdn-icons-png.flaticon.com/128/56/56889.png' />
                                <img className='stars' alt='Star' src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png' />
                                <img onClick={()=> {addStars(movies)}} className='str-btn' alt='increase' src='https://cdn-icons-png.flaticon.com/128/3524/3524388.png' />
                                <span className='starCount'>{stars}</span>
                            </div>
                            {fav?<button className='unfavourite-btn' onClick={this.handlefav}> Un-Favourite </button>:
                            <button className='favourite-btn' onClick={this.handlefav}> Favourite </button>}
                            

                            
                            <button className={addCart?'cart-btn':'remove-cart-btn'} onClick={this.handleCart}>
                                {addCart?"Add to Cart":"Remove from Cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;