import pyedflib
import resampy
import numpy as np

def read_edf_file(edf_file):

    sample_rate, eeg_data, labels, headers = nedc_load_edf(edf_file)

    eeg_data_resampled = resampy.resample(np.asarray(eeg_data), sample_rate[0], 250)

    return eeg_data_resampled


def nedc_load_edf(fname_a):

    # open an EDF file 
    #
    try:
        with pyedflib.EdfReader(fname_a) as fp:

            # get the metadata that we need:
            #  convert the labels to ascii and remove whitespace 
            #  to make matching easier
            #
            num_chans = fp.signals_in_file
            labels_tmp = fp.getSignalLabels()
            labels = [str(lbl.replace(' ', '')) for lbl in labels_tmp]

            # load each channel
            #
            sig = []
            fsamp = []
            num_chans = 1
            for i in range(num_chans):
                sig.append(fp.readSignal(i))
                fsamp.append(fp.getSampleFrequency(i))

            sig = sig[:250]
            # exit gracefully
            #
            header = fp.getSignalHeaders()
        return (fsamp, sig, labels, header)
    except Exception as e:
        print(e)
        return [None] * 4