from setuptools import setup

setup(
    name='flask_parody',
    packages=['flask_parody'],
    include_package_data=True,
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