import Image from 'next/image'
import React, { useRef, useState, useEffect } from 'react'
import Draggable from 'react-draggable';

function Animation() {
    return (
        <Draggable>
          <div
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: 'lightblue',
              cursor: 'move',
            }}
          >
            Arraste-me
          </div>
        </Draggable>
      );
    
}

export default Animation