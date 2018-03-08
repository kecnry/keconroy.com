import React from 'react'
import {Link} from 'react-router-dom'

import {Section} from './common'
import {CVInfo} from './cv'


export class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <CVInfo/> */}

        <Section>
          <p><b>THIS PAGE IS A WORK IN PROGRESS AND WILL EVENTUALLY REPLACE <a href="http://keconroy.com">keconroy.com</a></b></p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum nisl velit, ac dapibus eros porta suscipit. Aliquam sed sem in diam efficitur vestibulum. Aenean vitae interdum eros. Nam eget est mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec quam nisl, mollis fringilla turpis a, vestibulum tristique tortor. Integer ut libero eu elit molestie eleifend et non tortor. Donec sed magna ut mauris malesuada mollis eu at felis.</p>

          <p>Ut tristique ornare augue, sed fermentum magna pellentesque vel. Maecenas egestas augue nec felis euismod, rutrum venenatis purus condimentum. Sed eleifend eros eget sodales porta. Sed commodo ante eget ex eleifend, sit amet aliquam nisl tincidunt. Nam urna augue, mattis non mauris ut, aliquet egestas mi. Donec euismod sapien suscipit gravida eleifend. Maecenas condimentum lectus id dolor efficitur, at viverra ante congue. Pellentesque at tempor justo, et sagittis dolor. Duis non eros ac magna rhoncus finibus. Cras varius varius orci, quis ultrices tellus pharetra id.</p>

          <p>Sed scelerisque mauris a nisl laoreet dignissim. Vestibulum euismod ornare lacus eu vestibulum. Aenean risus urna, mollis et massa in, maximus dapibus orci. In at porttitor sem. Curabitur posuere feugiat erat ut dignissim. Ut mollis cursus velit sit amet auctor. Aliquam non sodales lorem. Ut consectetur est ut magna mollis ornare. Pellentesque elit neque, elementum lacinia odio et, scelerisque posuere orci. Morbi viverra mauris id dui gravida, ullamcorper pretium magna dignissim. Morbi efficitur metus nec pellentesque feugiat.</p>

          <p>Proin ac nisi eget augue finibus vulputate. Sed sollicitudin euismod dolor vestibulum egestas. Duis nec aliquam neque, quis lacinia nunc. Pellentesque in egestas mi. Sed a mattis dui. Etiam vehicula metus eu ante tincidunt tempor. Quisque fringilla congue rutrum. Vestibulum varius augue at dolor commodo, vel malesuada arcu fermentum. Praesent hendrerit nunc diam, ac volutpat diam consequat a.</p>

          <p>Proin scelerisque felis sed dui hendrerit luctus. Phasellus cursus fringilla odio vitae pharetra. Nullam mollis fermentum metus sit amet ultrices. Mauris vel pretium turpis, ac tempus ipsum. Fusce sollicitudin leo at luctus pretium. Suspendisse lacinia dapibus semper. Ut in odio felis. Vivamus id vulputate orci. Sed est tellus, dictum lacinia turpis a, accumsan tincidunt nulla.</p>
        </Section>
      </div>
    )
  }
}
