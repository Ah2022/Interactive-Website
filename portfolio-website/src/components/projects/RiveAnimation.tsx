'use client';

import { useEffect, useRef, useState } from 'react';
import { useRive, Layout, Fit, Alignment, StateMachineInputType } from '@rive-app/react-canvas';

interface RiveAnimationProps {
  src: string;
  stateMachine?: string;
  artboard?: string;
  animations?: string[];
  className?: string;
  autoplay?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

const RiveAnimation = ({
  src,
  stateMachine,
  artboard,
  animations,
  className = '',
  autoplay = true,
  onMouseEnter,
  onMouseLeave,
  onClick
}: RiveAnimationProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize Rive
  const { RiveComponent, rive } = useRive({
    src,
    stateMachines: stateMachine ? [stateMachine] : undefined,
    artboard,
    animations,
    autoplay,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center
    }),
    onLoad: () => {
      console.log('Rive animation loaded successfully');
    }
  });

  // Handle hover state
  useEffect(() => {
    if (!rive || !stateMachine) return;

    const inputs = rive.stateMachineInputs(stateMachine);
    if (!inputs) return;

    // Look for common input names that might control hover state
    const hoverInput = 
      inputs.find(input => input.name === 'hover') || 
      inputs.find(input => input.name === 'isHover') ||
      inputs.find(input => input.name === 'isHovering');

    if (hoverInput && hoverInput.type === StateMachineInputType.Boolean) {
      hoverInput.value = isHovered;
    }
  }, [rive, stateMachine, isHovered]);

  // Handle mouse events
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (onMouseEnter) onMouseEnter();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (onMouseLeave) onMouseLeave();
  };

  const handleClick = () => {
    if (!rive || !stateMachine) return;

    const inputs = rive.stateMachineInputs(stateMachine);
    if (!inputs) return;

    // Look for common input names that might trigger click animations
    const clickInput = 
      inputs.find(input => input.name === 'click') || 
      inputs.find(input => input.name === 'isClick') ||
      inputs.find(input => input.name === 'trigger');

    if (clickInput && clickInput.type === StateMachineInputType.Boolean) {
      clickInput.fire();
    } else if (clickInput && clickInput.type === StateMachineInputType.Number) {
      clickInput.value = 1;
    }

    if (onClick) onClick();
  };

  return (
    <div 
      ref={containerRef}
      className={`rive-animation-container ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <RiveComponent />
    </div>
  );
};

export default RiveAnimation;
