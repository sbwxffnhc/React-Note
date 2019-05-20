import React, { Component } from 'react';
import './index.css'
var tree = {
  title: "American Government System",
  childNodes: [
    {
      title: "Legislative", childNodes: [
        {
          title: "Congress", childNodes: [
            { title: "Agencies" }
          ]
        }
      ]
    },
    {
      title: "Executive", childNodes: [
        {
          title: "President", childNodes: [
            { title: "Cabinet" },
            { title: "Exec Office Of The President" },
            { title: "Vice-president" },
            {
              title: "Independent Agencies", childNodes: [
                { title: "Agriculture" },
                { title: "Commerce" },
                { title: "Defense" },
                { title: "Education" },
                { title: "......" }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Judicial", childNodes: [
        {
          title: "Supreme Court", childNodes: [
            { title: "Lower Courts" }
          ]
        }
      ]
    }
  ]
};

class Tree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }
  toggle() {
    this.setState({ visible: !this.state.visible });
  };
  renderTree(node) {
    if (node.childNodes != null) {
      return node.childNodes.map((node, index) => {
        return (
            <li key={index}>
              <span onClick={() => { this.toggle() }}>
                {node.title}</span>
              <ul>
                {this.renderTree(node)}
              </ul>
            </li>
        )
      })
    }
  }
  render() {
    return (
      <div className="tree">
      <ul>
          <li>
            <span onClick={() => { this.toggle() }}>
              {this.props.node.title}</span>
            
            <ul>{this.renderTree(this.props.node)}</ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Tree;
