from setuptools import setup

setup(
    name='flask_parody',
    version="0.0.1",
    packages=['flask_parody'],
    include_package_data=True,
    zip_safe=False,
    install_requires=[
        'flask',
    ],
    setup_requires=[
        'pytest-runner',
    ],
    tests_require=[
        'pytest',
    ],
)