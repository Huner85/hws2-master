import React from 'react';
import { Slider, SliderProps } from '@mui/material';

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                color: '#1976d2', // Основной цвет
                height: 6, // Высота трека
                '& .MuiSlider-thumb': {
                    width: 16,
                    height: 16,
                    backgroundColor: '#fff',
                    border: '2px solid #1976d2',
                    '&:hover': {
                        boxShadow: '0px 0px 8px rgba(25, 118, 210, 0.6)',
                    },
                },
                '& .MuiSlider-track': {
                    height: 6,
                    borderRadius: 3,
                },
                '& .MuiSlider-rail': {
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: '#bfbfbf',
                },
            }}
            {...props}
        />
    );
};

export default SuperRange;
