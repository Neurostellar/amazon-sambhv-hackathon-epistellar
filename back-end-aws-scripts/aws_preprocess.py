import numpy as np
from scipy.signal import *

def filtering(data, fs, wienerFilt=False):
    """Apply EEG pre-processing pipeline.
    
    Currently preprocessing only consists of a high pass (0.5Hz), low pass of 70hz and notch
    filter.
    
    Args:
        data: np.array containing the channels as rows and samples as columns
        fs: sampling frequency of the signal in Hz (200 Hz)
        wiener: apply Wiener filter (Default=False)
    Return:
        data: in-place transformed data np.array
    """
    
    # Low pass filter
    b, a = butter(4, [0.5/(fs/2), 70/(fs/2)], btype='band')
    data = filtfilt(b, a, data)
    # 50 Hz notch
    b, a = butter(4, [47.5/(fs/2), 52.5/(fs/2)], 'bandstop')
    data = filtfilt(b, a, data)
    # 60 Hz notch
    b, a = butter(4, [57.5/(fs/2), 62.5/(fs/2)], 'bandstop')
    data = filtfilt(b, a, data)
    
    return data


def preprocess(eeg_data, sample_rate):
    return filtering(eeg_data, sample_rate)