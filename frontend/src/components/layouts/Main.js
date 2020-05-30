import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
//styles
import "../../styles/layouts/Main.scss"
import "../../styles/animation/PageTransition.scss"
//animations
import { CSSTransition, TransitionGroup } from "react-transition-group";
//pages
import CarListPage from "../pages/CarListPage"
import SellCarPage from "../pages/SellCarPage"
import ContactPage from "../pages/ContactPage"
import NotFoundPage from "../pages/NotFoundPage"


class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { location } = this.props;

        return (
            <TransitionGroup component="main" className="main">
                <CSSTransition
                    key={location.key}
                    timeout={{ enter: 800, exit: 400 }}
                    classNames="fade"
                    mountOnEnter={false}
                    unmountOnExit={true}
                >
                    <div className="wrapper">
                        <Switch location={location}>
                            <Route path="/" exact component={CarListPage} />
                            <Route path="/sell-car" exact component={SellCarPage} />
                            <Route path="/contact" exact component={ContactPage} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        )
    }

}

export default withRouter(Main);