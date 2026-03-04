from python_app.utils import suma

def test_suma_positiva():
    assert suma(2,3) == 5

def test_suma_05():
    assert suma(0,5) == 5

def test_suma_negativo():
    assert suma(-2,3) == 1