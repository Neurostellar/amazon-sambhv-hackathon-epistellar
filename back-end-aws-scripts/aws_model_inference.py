from sklearn.dummy import DummyClassifier
import numpy as np


def get_result(eeg_data):
    timings, classes = get_annotations(eeg_data)
    return timings, classes

def get_annotations(eeg_data):
    ### For each epoch, generate the type of class it belongs to
    model = get_model()
    model.fit(eeg_data, np.ones(eeg_data.shape[0]))
    labels_pred = model.predict(eeg_data)
    labels_dict = {1: 'bckg', 2: 'artf', 3: 'spike and slow'}
    labels_pred = [labels_dict[pred] for pred in labels_pred]
    results = [(i,label) for i,label in enumerate(labels_pred)]
    return zip(*results)

def get_model():
    model = DummyClassifier(strategy="most_frequent")
    return model
