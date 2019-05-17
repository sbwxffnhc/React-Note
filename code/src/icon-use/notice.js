import React, { Component } from 'react'
import './toast.css'

class Notice extends Component {
    render() {
        const icons = {
            info: 'icon-danchuangtishitubiao',
            success: 'icon-chenggongtishitubiao',
            warning: 'icon-danchuangtishitubiao',
            error: 'icon-cuowutishitubiao',
        }
        const { type, content } = this.props
        return (
            <div className="modal dialog">
            <div className={`toast-notice ${type}`}>
                <svg>
                    <use xlinkHref={`#${icons[type]}`} />
                </svg>
                <span>{content}</span>
            </div>
            </div>
        )
    }
}

export default Notice